type Item = {
  title: string;
  link: string;
  description: string;
  logos?: string[];
};

export type Block = {
  header: string;
  items: Item[];
};

export const blocks: Block[] = [
  {
    header: "Random",
    items: [
      {
        title: "WC26",
        description: "Eliminator Predictions",
        link: "/wc26",
      },
    ],
  },
  {
    header: "Projects",
    items: [
      {
        title: "PikaDB",
        description: "LSM Database",
        link: "https://github.com/Muh-Hamza-99/pikadb",
      },
      // {
      //   title: "twig",
      //   description: "KV Log",
      //   link: "https://github.com/Muh-Hamza-99/twig",
      // },
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
      // {
      //   title: "carbon.sh",
      //   description: "CLI & API",
      //   link: "https://github.com/Muh-Hamza-99/wudroid",
      // },
      // {
      //   title: "Wudroid",
      //   description: "Discord Bot",
      //   link: "https://github.com/Muh-Hamza-99/wudroid",
      // },
    ],
  },
  {
    header: "Work",
    items: [
      {
        title: "StackAdapt",
        description: "Fall 2026",
        link: "/stackadapt",
        logos: ["/stackadapt.jpg"],
      },
      {
        title: "Shopify",
        description: "Merchant Authentication",
        link: "/shopify",
        logos: ["/shopify.jpg"],
      },
      {
        title: "Vidyard",
        description: "AI Avatars",
        link: "/vidyard",
        logos: ["/vidyard.jpg"],
      },
      {
        title: "Nokia",
        description: "Autonomous Networks",
        link: "/nokia",
        logos: ["/nokia.jpg"],
      },
      {
        title: "Twimbit",
        description: "Research Automation",
        link: "/twimbit",
        logos: ["/twimbit.jpg"],
      },
    ],
  },
  {
    header: "Study",
    items: [
      {
        title: "UWaterloo",
        description: "Computer Science",
        link: "/uwaterloo",
        logos: ["/uwaterloo.jpg"],
      },
    ],
  },
  {
    header: "Hackathons",
    items: [
      {
        title: "UmmahHacks",
        description: "ComfortCare (2nd place)",
        link: "https://devpost.com/software/comfortcare",
        logos: ["/ummahhacks.jpg"],
      },
      {
        title: "HTN 2023",
        description: "Dripbot (Top 32)",
        link: "https://devpost.com/software/dripbot-sxj301",
        logos: ["/hackthenorth.jpg"],
      },
    ],
  },
  {
    header: "Activites",
    items: [
      {
        title: "PSA",
        description: "Operations",
        link: "#",
        logos: ["/psa.jpg"],
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
