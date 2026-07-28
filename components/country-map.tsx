"use client";

import { useEffect, useState } from "react";
import { MapContainer, GeoJSON, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const createGlowingIcon = (color: string = "#144a67") => {
  return L.divIcon({
    className: "custom-glow-marker",
    html: `
      <div class="relative flex items-center justify-center w-1.5 h-1.5">
        <span class="relative inline-flex w-1.5 h-1.5 rounded-full shadow-[0_0_10px_${color}]" style="background-color: ${color}"></span>
      </div>
    `,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
};

interface CountryConfig {
  name: string;
  iso3: string;
  center: [number, number];
  zoom: number;
  markerPositions: [number, number][];
}

export default function CountryCard({ config }: { config: CountryConfig }) {
  const [countryFeature, setCountryFeature] = useState<any>(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json",
    )
      .then((res) => res.json())
      .then((data) => {
        const feature = data.features.find(
          (f: any) => f.id === config.iso3 || f.properties.name === config.name,
        );
        if (feature) {
          setCountryFeature({ type: "FeatureCollection", features: [feature] });
        }
      })
      .catch((err) => console.error(`Failed to load ${config.name}:`, err));
  }, [config]);

  return (
    <div className="relative w-full h-64 overflow-hidden flex flex-col justify-between">
      {/* <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:12px_12px] opacity-20 pointer-events-none" /> */}
      <div className="w-full h-full">
        {countryFeature ? (
          <MapContainer
            center={config.center}
            zoom={config.zoom}
            zoomControl={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
            touchZoom={false}
            boxZoom={false}
            dragging={false}
            keyboard={false}
            attributionControl={false}
            className="w-full h-full !bg-transparent"
          >
            <GeoJSON
              data={countryFeature}
              style={() => ({
                fillColor: "transparent",
                fillOpacity: 0,
                color: "#144a67",
                weight: 1.2,
                opacity: 0.85,
              })}
            />
            {config.markerPositions.map((markerPos, index) => (
              <Marker
                position={markerPos}
                icon={createGlowingIcon("#144a67")}
              />
            ))}
          </MapContainer>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
}
