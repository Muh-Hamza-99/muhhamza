import Hero from "../components/hero";
import Block from "../components/block";
import type { Block as BlockType } from "../lib/data";

const terms: BlockType[] = [
  {
    header: "1A",
    items: [
      {
        title: "CS 135",
        description: "Functional Programming",
        link: "https://uwflow.com/course/cs135",
      },
      {
        title: "MATH 135",
        description: "Algebra",
        link: "https://uwflow.com/course/math135",
      },
      {
        title: "MATH 137",
        description: "Calculus I",
        link: "https://uwflow.com/course/math137",
      },
      {
        title: "ECON 101",
        description: "Microeconomics",
        link: "https://uwflow.com/course/econ101",
      },
      {
        title: "ENGL 109",
        description: "Academic Writing",
        link: "https://uwflow.com/course/engl109",
      },
    ],
  },
  {
    header: "1B",
    items: [
      {
        title: "CS 136",
        description: "Algorithm Design & Data Abstraction",
        link: "https://uwflow.com/course/cs136",
      },
      {
        title: "CS 136L",
        description: "Software Development Techniques",
        link: "https://uwflow.com/course/cs136l",
      },
      {
        title: "MATH 136",
        description: "Linear Algebra I",
        link: "https://uwflow.com/course/math136",
      },
      {
        title: "MATH 138",
        description: "Calculus II",
        link: "https://uwflow.com/course/math138",
      },
      {
        title: "EARTH 122",
        description: "Environmental Science",
        link: "https://uwflow.com/course/earth122",
      },
    ],
  },
  {
    header: "2A",
    items: [
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
        title: "STAT 230",
        description: "Probability",
        link: "https://uwflow.com/course/stat230",
      },
      {
        title: "ECON 201",
        description: "Microeconomic Theory",
        link: "https://uwflow.com/course/econ201",
      },
      {
        title: "SI 121R",
        description: "Islam in the World",
        link: "https://uwflow.com/course/si121r",
      },
    ],
  },
  {
    header: "2B",
    items: [
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
        title: "CS 251",
        description: "Computer Organization & Design",
        link: "https://uwflow.com/course/cs251",
      },
      {
        title: "MATH 239",
        description: "Combinatorics & Graph Theory",
        link: "https://uwflow.com/course/math239",
      },
      {
        title: "ECON 371",
        description: "Business Finance",
        link: "https://uwflow.com/course/econ371",
      },
    ],
  },
  {
    header: "3A",
    items: [
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
        title: "MATH 235",
        description: "Linear Algebra II",
        link: "https://uwflow.com/course/math235",
      },
      {
        title: "STAT 231",
        description: "Statistics",
        link: "https://uwflow.com/course/stat231",
      },
    ],
  },
//   {
//     header: "3B",
//     items: [
//       {
//         title: "CS 370",
//         description: "Numerical Computation",
//         link: "https://uwflow.com/course/cs370",
//       },
//       {
//         title: "CS 454",    
//         description: "Distributed Systems",
//         link: "https://uwflow.com/course/cs454",
//       },
//       {
//         title: "CS 456",
//         description: "Networks",
//         link: "https://uwflow.com/course/cs456",
//       },
//       {
//         title: "MATH 237",
//         description: "Calculus III",
//         link: "https://uwflow.com/course/math237",
//       },
//       {
//         title: "MSE 541",
//         description: "Search Engines",
//         link: "https://uwflow.com/course/mse541",
//       },
//       {
//         title: "PSCI 359",
//         description: "Politics in South Asia",
//         link: "https://uwflow.com/course/psci359",
//       },
//     ],
//   },
//   {
//     header: "4A",
//     items: [
//       {
//         title: "CS 451",
//         description: "Data-Intensive Distributed Computing",
//         link: "https://uwflow.com/course/cs451",
//       },
//       {
//         title: "CS 448",
//         description: "Database Systems",
//         link: "https://uwflow.com/course/cs448",
//       },
//       {
//         title: "CS 479",
//         description: "Neural Networks",
//         link: "https://uwflow.com/course/cs479",
//       },
//       {
//         title: "ENGL 108D",
//         description: "Digital Lives",
//         link: "https://uwflow.com/course/engl108d",
//       },
//       {
//         title: "CLAS 104",
//         description: "Classic Mythology",
//         link: "https://uwflow.com/course/clas104",
//       },
//     ],
//   },
//   {
//     header: "4B",
//     items: [
//       {
//         title: "CS 343",
//         description: "Concurrent Programming",
//         link: "https://uwflow.com/course/cs343",
//       },
//       {
//         title: "CS 458",
//         description: "Computer Security & Privacy",
//         link: "https://uwflow.com/course/cs458",
//       },
//       {
//         title: "CS 489",
//         description: "Natural Language Processing",
//         link: "https://uwflow.com/course/cs489",
//       },
//       {
//         title: "HEALTH 105",
//         description: "Mental Health Literacy",
//         link: "https://uwflow.com/course/health105",
//       },
//     ],
//   },
];

const UWaterloo = () => {
  return (
    <main className="min-h-screen flex items-center bg-background text-foreground font-sans">
      <div className="w-full mx-auto max-w-3xl p-4 md:px-8 lg:px-16 xl:px-32">
        <Hero />
        <div className="flex flex-col space-y-2 mt-2">
          {terms.map((term, index) => (
            <Block key={index} block={term} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default UWaterloo;
