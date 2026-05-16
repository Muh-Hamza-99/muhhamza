type Experience = {
  role: string;
  company: string;
  logo: string;
};

type Extracurricular = {
  role: string;
  company: string;
  logo: string;
};

type Project = {
  name: string;
  description: string;
};

type Course = {
  code: string;
  name: string;
};

type Term = {
  index: number;
  term: string;
  courses: Course[];
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "Shopify",
    logo: "/shopify.svg",
  },
  {
    role: "Software Engineer Intern",
    company: "Vidyard",
    logo: "/vidyard.svg",
  },
  { role: "Software Developer Intern", company: "Nokia", logo: "/nokia.jpeg" },
  {
    role: "Business Analyst Intern",
    company: "Twimbit",
    logo: "/twimbit.jpeg",
  },
];

export const extracurriculars: Extracurricular[] = [
  { role: "Operations Executive", company: "PSA", logo: "/psa.jpg" },
];

export const projects: Project[] = [
  {
    name: "falcon",
    description: "Internship aggregation platform",
  },
  {
    name: "PikaDB",
    description: "SQL over LSM database",
  },
  {
    name: "WLP4",
    description: "C subset to MIPS compiler",
    },
  {
    name: "UWPlanr",
    description: "UWaterloo course planner",
  },
];

export const terms: Term[] = [
  {
    index: 0,
    term: "1A",
    courses: [
      { code: "CS 135", name: "Functional Programming" },
      { code: "MATH 135", name: "Algebra" },
      { code: "MATH 137", name: "Calculus I" },
      { code: "ECON 101", name: "Microeconomics" },
      { code: "ENGL 109", name: "Academic Writing" },
    ],
  },
  {
    index: 1,
    term: "1B",
    courses: [
      { code: "CS 136", name: "Algorithm Design & Data Abstraction" },
      { code: "CS 136L", name: "Tools & Techniques for Software Development" },
      { code: "MATH 136", name: "Linear Algebra I" },
      { code: "MATH 138", name: "Calculus II" },
      { code: "EARTH 122", name: "Environmental Sciences" },
    ],
  },
  {
    index: 2,
    term: "2A",
    courses: [
      { code: "CS 245", name: "Logic & Computation" },
      { code: "CS 246", name: "Object-Oriented Software Development" },
      { code: "STAT 230", name: "Probability" },
      { code: "ECON 201", name: "Microeconomic Theory" },
      { code: "SI 121R", name: "Islam in the World" },
    ],
  },
  {
    index: 3,
    term: "2B",
    courses: [
      { code: "CS 240", name: "Data Structures" },
      { code: "CS 241", name: "Sequential Programs" },
      { code: "CS 251", name: "Computer Organization" },
      { code: "MATH 239", name: "Combinatorics" },
      { code: "ECON 371", name: "Business Finance I" },
    ],
  },
  {
    index: 4,
    term: "3A",
    courses: [
      { code: "CS 341", name: "Algorithms" },
      { code: "CS 348", name: "Database Management" },
      { code: "CS 350", name: "Operating Systems" },
      { code: "MATH 235", name: "Linear Algebra II" },
      { code: "STAT 231", name: "Statistics" },
    ],
  },
];
