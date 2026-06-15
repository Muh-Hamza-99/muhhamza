type Item = {
  title: string;
  link: string;
  description: string;
  logo?: string;
};

export type Block = {
  header: string;
  items: Item[];
};

export const blocks: Block[] = [
  {
    header: "Projects",
    items: [
      {
        title: "PikaDB",
        description: "LSM Database",
        link: "https://github.com/Muh-Hamza-99/pikadb",
      },
      {
        title: "falcon",
        description: "Web Application",
        link: "https://tryfalcon.io",
      },
      {
        title: "Deframe",
        description: "Agent",
        link: "https://deframe.ai",
      },
      {
        title: "WLP4",
        description: "C Compiler",
        link: "https://student.cs.uwaterloo.ca/~CS241/wlp4/",
      },
      {
        title: "UWPlanr",
        description: "Web Application",
        link: "https://uwplanr.netlify.app",
      },
    ],
  },
  {
    header: "Work",
    items: [
      {
        title: "StackAdapt",
        description: "Fall 2026",
        link: "/stackadapt",
        logo: "/stackadapt.jpg",
      },
      {
        title: "Shopify",
        description: "Merchant Authentication",
        link: "/shopify",
        logo: "/shopify.jpg",
      },
      {
        title: "Vidyard",
        description: "AI Avatars",
        link: "/vidyard",
        logo: "/vidyard.jpg",
      },
      {
        title: "Nokia",
        description: "Autonomous Networks",
        link: "/nokia",
        logo: "/nokia.jpg",
      },
      {
        title: "Twimbit",
        description: "AI & CX Research",
        link: "/twimbit",
        logo: "/twimbit.jpg",
      },
    ],
  },
  {
    header: "School",
    items: [
      {
        title: "2B",
        description: "Summer 2025",
        link: "/2b",
      },
      {
        title: "2A",
        description: "Fall 2024",
        link: "/2a",
      },
      {
        title: "1B",
        description: "Winter 2024",
        link: "/1b",
      },
      {
        title: "1A",
        description: "Fall 2023",
        link: "/1a",
      },
    ],
  },
];