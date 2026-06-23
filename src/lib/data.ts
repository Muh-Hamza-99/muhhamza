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
        description: "Research Automation",
        link: "/twimbit",
        logo: "/twimbit.jpg",
      },
    ],
  },
  {
    header: "Study",
    items: [
      {
        title: "UWaterloo",
        description: "Computer Science",
        link: "https://uwaterloo.ca",
        logo: "/uwaterloo.jpg"
      },
    ],
  },
  {
    header: "Hackathons",
    items: [
      {
        title: "UmmahHacks",
        description: "ComfortCare (2nd place)",
        link: "#",
        logo: "/ummahhacks.jpg"
      },
      {
        title: "HTN 2023",
        description: "Dripbot (Top 32)",
        link: "#",
        logo: "/hackthenorth.jpg"
      },
    ],
  },
  {
    header: "Awards",
    items: [
      {
        title: "Scholarship",
        description: "Mathematics Global Scholarship",
        link: "#",
      },
      {
        title: "Distinction",
        description: "2023, 2024, 2025",
        link: "#",
      },
      {
        title: "Scholarship",
        description: "President's Distinction",
        link: "#",
      },
    ],
  },
  {
    header: "Other",
    items: [
      {
        title: "Sports",
        description: "Football, Cricket, Squash, Table Tennis",
        link: "#",
      },
      {
        title: "Languages",
        description: "English, Urdu",
        link: "#",
      },
    ],
  },
];
