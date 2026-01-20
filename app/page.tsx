"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Container from "@/components/container";
import Footer from "@/components/footer";

const years = [
  {
    year: 2025,
    things: [
      {
        name: "UmmahHacks",
        description: "Jan 24, 2026",
        image: "/ummahhacks.jpg",
        url: "https://ummahhacks.com",
      },
      {
        name: "Muhammad Hamza",
        description: "Portfolio Website",
        image: "/mh.svg",
      },
      {
        name: "Shopify",
        description: "Merchant Authentication",
        image: "/shopify.jpg",
        url: "https://shopify.com",
      },
    ],
  },
  {
    year: 2024,
    things: [
      {
        name: "falcon",
        description: "Internship Dashboard",
        image: "/falcon.png",
        url: "https://tryfalcon.io",
      },
      {
        name: "Hack the North",
        description: "AI Fit Checker (Top 32)",
        image: "/hack-the-north.jpg",
        url: "https://hackthenorth.com",
      },
      {
        name: "Vidyard",
        description: "AI Avatar Features",
        image: "/vidyard.png",
        url: "https://vidyard.com",
      },
      {
        name: "Nokia",
        description: "Autonomous Networks",
        image: "/nokia.jpg",
        url: "https://nokia.com",
      },
    ],
  },
  {
    year: 2023,
    things: [
      {
        name: "UWPlanr",
        description: "Course Planner",
        image: "/uwplanr.jpg",
        url: "https://uwplanr.netlify.app",
      },
      {
        name: "Twimbit",
        description: "Telco AI/CX Research",
        image: "/twimbit.jpg",
        url: "https://tryfalcon.io",
      },
      {
        name: "University of Waterloo",
        description: "Computer Science (C&O Minor)",
        image: "/university-of-waterloo.jpeg",
        url: "https://uwaterloo.ca",
      },
    ],
  },
];

export default function Home() {
  return (
    <Container>
      <Navbar />

      <div className="space-y-4">
        {years.map((year, index) => (
          <>
            <h2 className="relative flex items-center">
              <span className="absolute left-0 right-0 top-1/2 h-[0.5px] bg-[#5E5D59]"></span>
              <span className="relative bg-[#e8eded] pr-4 text-lg font-semibold">
                {year.year}
              </span>
            </h2>
            <div className="space-y-4">
              {year.things.map((project) => (
                <Link
                  target={project.url && "_blank"}
                  key={project.name}
                  href={project.url ? project.url : "/"}
                  className="flex items-start p-2 rounded-full gap-2"
                >
                  <Image
                    className="rounded-full"
                    src={project.image}
                    alt={project.name}
                    width={50}
                    height={50}
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium mb-1">{project.name}</h3>
                    <p className="text-[#5E5D59] text-sm">
                      {project.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ))}
      </div>

      <Footer />
    </Container>
  );
}
