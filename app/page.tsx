"use client";

import Section from "@/components/section";
import Block from "../components/block";
import { MAIN } from "../lib/data";

import dynamic from "next/dynamic";

const CountryMap = dynamic(() => import("../components/country-map"), {
  ssr: false,
  loading: () => (
    <Section>
      <div className="text-center">Loading...</div>
    </Section>
  ),
});

const Root = () => {
  return (
    <div className="flex flex-col space-y-2 mt-2">
      {MAIN.map((block, index) => (
        <Block key={index} block={block} />
      ))}
      <Section>
        <CountryMap
          config={{
            name: "Canada",
            iso3: "CAN",
            center: [55.1304, -95.3468] as [number, number],
            zoom: 3,
            markerPos: [43.4667, -76.5167] as [number, number],
          }}
        />
      </Section>
    </div>
  );
};

export default Root;
