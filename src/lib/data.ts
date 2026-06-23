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
    header: "Study",
    items: [
      {
        title: "CS 135",
        description: "Functional Programming",
        link: "https://uwflow.com/course/cs135",
      },
      {
        title: "CS 136",
        description: "Algorithm Design & Data Abstraction",
        link: "https://uwflow.com/course/cs136",
      },
      {
        title: "CS 240",
        description: "Data Structures & Data Management",
        link: "https://uwflow.com/course/cs240",
      },
      {
        title: "CS 241",
        description: "Sequential Programming",
        link: "https://uwflow.com/course/cs241",
      },
      {
        title: "CS 245",
        description: "Logic & Computation",
        link: "https://uwflow.com/course/cs245",
      },
      {
        title: "CS 246",
        description: "Object-Oriented Programming",
        link: "https://uwflow.com/course/cs246",
      },
      {
        title: "CS 251",
        description: "Computer Organization & Design",
        link: "https://uwflow.com/course/cs251",
      },
      {
        title: "CS 341",
        description: "Algorithms",
        link: "https://uwflow.com/course/cs341",
      },
      {
        title: "CS 348",
        description: "Database Management",
        link: "https://uwflow.com/course/cs348",
      },
      {
        title: "CS 350",
        description: "Operating Systems",
        link: "https://uwflow.com/course/cs350",
      },
      {
        title: "MATH 239",
        description: "Combinatorics & Graph Theory",
        link: "https://uwflow.com/course/math239",
      },
    ],
  },
  {
    header: "Achievements",
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
