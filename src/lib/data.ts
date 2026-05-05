type Experience = {
  role: string;
  company: string;
  logo: string;
};

type Project = {
    name: string;
    description: string;
};

export const experiences: Experience[] = [
  { role: "Software Engineer Intern", company: "Shopify", logo: "/shopify.svg" },
  { role: "Software Engineer Intern", company: "Vidyard", logo: "/vidyard.svg" },
  { role: "Software Developer Intern", company: "Nokia", logo: "/nokia.jpeg" },
  { role: "Business Analyst Intern", company: "Twimbit", logo: "/twimbit.jpeg" },
];

export const projects: Project[] = [
  { name: "falcon", description: "Internship aggregation platform" },
  { name: "PikaDB", description: "SQL over LSM database" },
  { name: "WLP4", description: "C subset to MIPS compiler" },
  { name: "UWPlanr", description: "UWaterloo course planner" },
];