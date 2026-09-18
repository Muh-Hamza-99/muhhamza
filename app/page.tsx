"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    name: "StackAdapt",
    description: "Internal Tools",
    image: "/stackadapt.jpg",
    url: "https://www.stackadapt.com",
  },
  {
    name: "Whatcode",
    description: "Personal Cloud Coding Agent",
    image: "/github.jpg",
    url: "https://www.whatcode.com",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-medium mb-2 text-balance">
            Muhammad Hamza
          </h1>

          <p className="text-xl mb-4 text-pretty text-muted-foreground">
            Engineer studying Computer Science at the University of Waterloo.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button className="rounded-full px-4">
              <Link href="https://www.linkedin.com/in/hamzaasad/">
                LinkedIn
              </Link>
            </Button>
            <Button className="rounded-full px-4">
              <Link href="https://github.com/Muh-Hamza-99">GitHub</Link>
            </Button>
            <Button className="rounded-full px-4">
              <Link href="https://muhhamza.substack.com/">Substack</Link>
            </Button>
          </div>
        </div>

        <div>
          <p className="text-muted-foreground mb-4">Recent</p>
          <div className="space-y-6">
            {projects.map((project) => (
              <Link
                target="_blank"
                key={project.name}
                href={project.url}
                className="group flex items-center p-2 rounded-full gap-3 transition-all duration-300 hover:shadow-secondary hover:shadow-lg"
              >
                <Image
                  className="rounded-full"
                  src={project.image}
                  alt={project.name}
                  width={50}
                  height={50}
                />
                <div className="flex-1">
                  <h3 className="font-medium text-neutral-900 mb-1">
                    {project.name}
                  </h3>
                  <p className="text-neutral-500 text-sm">
                    {project.description}
                  </p>
                </div>
                <ArrowRight className="size-8 text-primary group-hover:-rotate-45 group-hover:transition-all duration-300 mr-1" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 text-sm text-muted-foreground">
          <p>© 2026 Muhammad Hamza</p>
        </div>
      </div>
    </main>
  );
}
