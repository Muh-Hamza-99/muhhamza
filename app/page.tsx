"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    name: "Shopify",
    description: "Merchant Authentication",
    image: "/shopify.jpg",
    url: "https://shopify.com",
  },
  {
    name: "falcon",
    description: "Internship Dashboard",
    image: "/falcon.png",
    url: "https://tryfalcon.io",
  },
  {
    name: "Vidyard",
    description: "AI Avatar Features",
    image: "/vidyard.png",
    url: "https://vidyard.com",
  },
  {
    name: "Hack the North",
    description: "AI Fit Checker (Top 32)",
    image: "/hack-the-north.jpg",
    url: "https://hackthenorth.com",
  },
  {
    name: "Deframe",
    description: "Headline Bias Deframing",
    image: "/deframe.png",
    url: "https://deframe.ai",
  },
  {
    name: "Nokia",
    description: "Autonomous Networks",
    image: "/nokia.jpg",
    url: "https://nokia.com",
  },
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
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F0EEE6] text-[#141413] flex items-center justify-center p-6">
      <div className="max-w-lg w-full py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-balance">
            Muhammad Hamza
          </h1>

          <p className="text-xl text-[#5E5D59] mb-4 text-pretty">
            Student. Software. Sports.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#141413] text-[#FAF9F5] transition-all duration-300 hover:bg-[#5E5D59] rounded-full px-6"
            >
              <Link href="https://github.com/Muh-Hamza-99">GitHub</Link>
            </Button>
            <Button
              asChild
              className="bg-[#141413] text-[#FAF9F5] transition-all duration-300 hover:bg-[#5E5D59] rounded-full px-6"
            >
              <Link href="https://www.linkedin.com/in/hamzaasad/">
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <Link
              target="_blank"
              key={project.name}
              href={project.url}
              className="flex items-start p-2 rounded-full gap-2 transition-all duration-300 hover:bg-[#FAF9F5] hover:shadow-2xl"
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
                <p className="text-[#5E5D59] text-sm">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-sm text-[#5E5D59]">
          <p>© {new Date().getFullYear()} Muhammad Hamza</p>
        </div>
      </div>
    </main>
  );
}
