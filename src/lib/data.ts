type Experience = {
  role: string;
  company: string;
  logo: string;
  link: string;
};

type Extracurricular = {
  role: string;
  company: string;
  logo: string;
};

type Project = {
  name: string;
  description: string;
  link: string;
};

type Course = {
  code: string;
  name: string;
  link: string;
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
    link: "/shopify",
  },
  {
    role: "Software Engineer Intern",
    company: "Vidyard",
    logo: "/vidyard.svg",
    link: "/vidyard",
  },
  {
    role: "Software Developer Intern",
    company: "Nokia",
    logo: "/nokia.jpeg",
    link: "/nokia",
  },
  {
    role: "Business Analyst Intern",
    company: "Twimbit",
    logo: "/twimbit.jpeg",
    link: "/twimbit",
  },
];

export const extracurriculars: Extracurricular[] = [
  { role: "Operations Executive", company: "PSA", logo: "/psa.jpg" },
];

export const projects: Project[] = [
  {
    name: "falcon",
    description: "Internship aggregation platform",
    link: "/falcon",
  },
  {
    name: "PikaDB",
    description: "SQL over LSM database",
    link: "/pikadb",
  },
    {
    name: "Deframe",
    description: "Lingustic deconstruction agent",
    link: "/deframe",
  },
  {
    name: "WLP4",
    description: "C subset to MIPS compiler",
    link: "/wlp4",
  },
  {
    name: "UWPlanr",
    description: "UWaterloo course planner",
    link: "/uwplanr",
  },
];

export const terms: Term[] = [
  {
    index: 0,
    term: "1A",
    courses: [
      { code: "CS 135", name: "Functional Programming", link: "/cs135" },
      { code: "MATH 135", name: "Algebra", link: "/math135" },
      { code: "MATH 137", name: "Calculus I", link: "/math137" },
      { code: "ECON 101", name: "Microeconomics", link: "/econ101" },
      { code: "ENGL 109", name: "Academic Writing", link: "/engl109" },
    ],
  },
  {
    index: 1,
    term: "1B",
    courses: [
      { code: "CS 136", name: "Algorithm Design & Data Abstraction", link: "/cs136" },
      { code: "CS 136L", name: "Tools & Techniques for Software Development", link: "/cs136l" },
      { code: "MATH 136", name: "Linear Algebra I", link: "/math136" },
      { code: "MATH 138", name: "Calculus II", link: "/math138" },
      { code: "EARTH 122", name: "Environmental Sciences", link: "/earth122" },
    ],
  },
  {
    index: 2,
    term: "2A",
    courses: [
      { code: "CS 245", name: "Logic & Computation", link: "/cs245" },
      { code: "CS 246", name: "Object-Oriented Software Development", link: "/cs246" },
      { code: "STAT 230", name: "Probability", link: "/stat230" },
      { code: "ECON 201", name: "Microeconomic Theory", link: "/econ201" },
      { code: "SI 121R", name: "Islam in the World", link: "/si121r" },
    ],
  },
  {
    index: 3,
    term: "2B",
    courses: [
      { code: "CS 240", name: "Data Structures", link: "/cs240" },
      { code: "CS 241", name: "Sequential Programs", link: "/cs241" },
      { code: "CS 251", name: "Computer Organization", link: "/cs251" },
      { code: "MATH 239", name: "Combinatorics", link: "/math239" },
      { code: "ECON 371", name: "Business Finance I", link: "/econ371" },
    ],
  },
  {
    index: 4,
    term: "3A",
    courses: [
      { code: "CS 341", name: "Algorithms", link: "/cs341" },
      { code: "CS 348", name: "Database Management", link: "/cs348" },
      { code: "CS 350", name: "Operating Systems", link: "/cs350" },
      { code: "MATH 235", name: "Linear Algebra II", link: "/math235" },
      { code: "STAT 231", name: "Statistics", link: "/stat231" },
    ],
  },
];
