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
        title: "Chaat",
        description: "Chat Server",
        link: "/chaat",
      },
      {
        title: "PikaDB",
        description: "LSM Database",
        link: "/pikadb",
      },
      {
        title: "falcon",
        description: "Web Application",
        link: "/falcon",
      },
      {
        title: "Deframe",
        description: "Agent",
        link: "/deframe",
      },
      {
        title: "WLP4",
        description: "C Compiler",
        link: "/wlp4",
      },
      {
        title: "UWPlanr",
        description: "Web Application",
        link: "/uwplanr",
      },
    ],
  },
  {
    header: "Work",
    items: [
      {
        title: "Shopify",
        description: "Fall 2026",
        link: "/shopify",
        logo: "/shopify.svg",
      },
      {
        title: "Shopify",
        description: "Merchant Authentication",
        link: "/shopify",
        logo: "/shopify.svg",
      },
      {
        title: "Vidyard",
        description: "AI Avatars",
        link: "/vidyard",
        logo: "/vidyard.svg",
      },
      {
        title: "Nokia",
        description: "Autonomous Networks",
        link: "/nokia",
        logo: "/nokia.jpeg",
      },
      {
        title: "Twimbit",
        description: "AI & CX Research",
        link: "/twimbit",
        logo: "/twimbit.jpeg",
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
        logo: "/uwaterloo.svg",
      },
      {
        title: "2A",
        description: "Fall 2024",
        link: "/2a",
        logo: "/uwaterloo.svg",
      },
      {
        title: "1B",
        description: "Winter 2024",
        link: "/1b",
        logo: "/uwaterloo.svg",
      },
      {
        title: "1A",
        description: "Fall 2023",
        link: "/1a",
        logo: "/uwaterloo.svg",
      },
    ],
  },
];