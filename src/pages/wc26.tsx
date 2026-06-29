import Hero from "../components/hero";
import Block from "../components/block";
import type { Block as BlockType } from "../lib/data";

const matches: BlockType[] = [
  {
    header: "Round of 32",
    items: [
      {
        title: "1-0",
        description: "2-0",
        link: "#",
        logos: [
          "https://flagsapi.com/CA/flat/64.png",
          "https://flagsapi.com/ZA/flat/64.png",
        ],
      },
      {
        title: "TBD",
        description: "3-2",
        link: "#",
        logos: [
          "https://flagsapi.com/BR/flat/64.png",
          "https://flagsapi.com/JP/flat/64.png",
        ],
      },
      {
        title: "TBD",
        description: "3-1",
        link: "#",
        logos: [
          "https://flagsapi.com/DE/flat/64.png",
          "https://flagsapi.com/PY/flat/64.png",
        ],
      },
      {
        title: "TBD",
        description: "1-2",
        link: "#",
        logos: [
          "https://flagsapi.com/NL/flat/64.png",
          "https://flagsapi.com/MA/flat/64.png",
        ],
      },
      {
        title: "TBD",
        description: "TBD",
        link: "#",
        logos: [
          "https://flagsapi.com/CI/flat/64.png",
          "https://flagsapi.com/NO/flat/64.png",
        ],
      },
      {
        title: "TBD",
        description: "TBD",
        link: "#",
        logos: [
          "https://flagsapi.com/FR/flat/64.png",
          "https://flagsapi.com/SE/flat/64.png",
        ],
      },
      {
        title: "TBD",
        description: "TBD",
        link: "#",
        logos: [
          "https://flagsapi.com/MX/flat/64.png",
          "https://flagsapi.com/EC/flat/64.png",
        ],
      },
      {
        title: "TBD",
        description: "TBD",
        link: "#",
        logos: [
          "https://flagsapi.com/GB/flat/64.png",
          "https://flagsapi.com/CD/flat/64.png",
        ],
      },
      {
        title: "TBD",
        description: "TBD",
        link: "#",
        logos: [
          "https://flagsapi.com/BE/flat/64.png",
          "https://flagsapi.com/SN/flat/64.png",
        ],
      },
      {
        title: "TBD",
        description: "TBD",
        link: "#",
        logos: [
          "https://flagsapi.com/US/flat/64.png",
          "https://flagsapi.com/BA/flat/64.png",
        ],
      },
      {
        title: "TBD",
        description: "TBD",
        link: "#",
        logos: [
          "https://flagsapi.com/ES/flat/64.png",
          "https://flagsapi.com/AT/flat/64.png",
        ],
      },
      {
        title: "TBD",
        description: "TBD",
        link: "#",
        logos: [
          "https://flagsapi.com/PT/flat/64.png",
          "https://flagsapi.com/HR/flat/64.png",
        ],
      },
      {
        title: "TBD",
        description: "TBD",
        link: "#",
        logos: [
          "https://flagsapi.com/CH/flat/64.png",
          "https://flagsapi.com/DZ/flat/64.png",
        ],
      },
      {
        title: "TBD",
        description: "TBD",
        link: "#",
        logos: [
          "https://flagsapi.com/AU/flat/64.png",
          "https://flagsapi.com/EG/flat/64.png",
        ],
      },
      {
        title: "TBD",
        description: "TBD",
        link: "#",
        logos: [
          "https://flagsapi.com/AR/flat/64.png",
          "https://flagsapi.com/CV/flat/64.png",
        ],
      },
      {
        title: "TBD",
        description: "TBD",
        link: "#",
        logos: [
          "https://flagsapi.com/CO/flat/64.png",
          "https://flagsapi.com/GH/flat/64.png",
        ],
      },
    ],
  },
  {
    header: "Round of 16",
    items: [],
  },
  {
    header: "Quarter Finals",
    items: [],
  },
  {
    header: "Semi Finals",
    items: [],
  },
  {
    header: "Third Place",
    items: [],
  },
  {
    header: "Final",
    items: [],
  },
];

const WC26 = () => {
  return (
    <main className="min-h-screen flex items-center bg-background text-foreground font-sans">
      <div className="w-full mx-auto max-w-3xl p-4 md:px-8 lg:px-16 xl:px-32">
        <Hero />
        <div className="flex flex-col space-y-2 mt-2">
          {matches.map((match, index) => (
            <Block key={index} block={match} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default WC26;
