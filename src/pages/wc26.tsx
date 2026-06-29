import Hero from "../components/hero";
import Block from "../components/block";
import type { Block as BlockType } from "../lib/data";

const matches: BlockType[] = [
  {
    header: "Round of 32",
    items: [
      {
        title: "Canada vs. South Africa",
        description: "1-0 | 2-0",
        link: "#",
        // logos: [
        //   "https://flagsapi.com/CA/flat/64.png",
        //   "https://flagsapi.com/ZA/flat/64.png",
        // ],
      },
      {
        title: "Brazil vs. Japan",
        description: "TBD | 3-2",
        link: "#",
        // logos: [
        //   "https://flagsapi.com/BR/flat/64.png",
        //   "https://flagsapi.com/JP/flat/64.png",
        // ],
      },
      {
        title: "Germany vs. Paraguay",
        description: "TBD | 3-1",
        link: "#",
        // logos: [
        //   "https://flagsapi.com/DE/flat/64.png",
        //   "https://flagsapi.com/PY/flat/64.png",
        // ],
      },
      {
        title: "Netherlands vs. Morocco",
        description: "TBD | 1-2",
        link: "#",
        // logos: [
        //   "https://flagsapi.com/NL/flat/64.png",
        //   "https://flagsapi.com/MA/flat/64.png",
        // ],
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
