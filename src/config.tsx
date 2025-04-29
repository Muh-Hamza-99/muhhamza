import { Icons } from "@/components/icons"

type Config = {
    name: string
    avatar: string
    title: string
    siteUrl: string
    socials: {
        name: string
        url: string
        icon: keyof typeof Icons
    }[]
    description: string | JSX.Element
    descriptionRaw: string
    experiences: {
        name: string
        image?: string
        description: string
        url: string
        tags: {
            name: string
            icon: keyof typeof Icons
        }[]
        featured: boolean
        testimonial?: string
    }[]
    projects: {
        name: string
        image: string
        description: string
        url: string
        tags: {
            name: string
            icon: keyof typeof Icons
        }[]
        github?: string
        featured: boolean
        testimonial?: string
    }[]
    courses: {
        code: string
        image?: string
        name: string
        tags: {
            name: string
            icon: keyof typeof Icons
        }[]
        featured: boolean
        notes?: string
    }[]
}

export const CONFIG: Config = {
    name: "Muhammad Hamza",
    avatar: "/images/author.png",
    title: "Student at the University of Waterloo",
    siteUrl: "https://muhhamza.netlify.app/",
    socials: [
        {
            name: "GitHub",
            url: "https://github.com/Muh-Hamza-99",
            icon: "github",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/hamzaasad/",
            icon: "linkedin",
        },
        {
            name: "muhammad.hamzaasad@gmail.com",
            url: "mailto:muhammad.hamzaasad@gmail.com",
            icon: "email",
        },
        {
            name: "Medium",
            url: "https://medium.com/@muhammad.hamzaasad",
            icon: "medium",
        }
    ],
    description: (
        <>
            Hi, I&apos;m Hamza. Studying Computer Science at the University of Waterloo.
        </>
    ),
    descriptionRaw: `Hi, I'm Hamza. Studying Computer Science at the University of Waterloo.`,
    experiences: [
        {
            name: "Software Developer",
            image: "/images/nokia.jpeg",
            description: "Software development kit for Nokia's next generation of autonomous networks.",
            url: "https://www.nokia.com/",
            tags: [
                { name: "JavaScript", icon: "javascript" },
                { name: "React.js", icon: "react" },
                { name: "Kubernetes", icon: "kubernetes" },
                { name: "FastAPI", icon: "fastapi" },
            ],
            featured: true,
        },
        {
            name: "Software Engineer",
            image: "/images/codeverse.jpeg",
            description: "Website for increasing Codeverse's online presence.",
            url: "https://codeverseorg.netlify.app",
            tags: [
                { name: "Next.js", icon: "nextjs" },
            ],
            featured: true,
        },
        {
            name: "Business Analyst",
            image: "/images/twimbit.jpeg",
            description: "Dossier creation and document automation tool for dossier creation.",
            url: "https://twimbit.com",
            tags: [
                { name: "Python", icon: "python" },
                { name: "PostgreSQL", icon: "postgresql" },
            ],
            featured: true,
        },
        {
            name: "Coding Instructor",
            image: "/images/createch.jpeg",
            description: "Taught lessons about coding to a cohort of students.",
            url: "",
            tags: [],
            featured: false,
        }
    ],
    projects: [
        {
            name: "Partial",
            image: "/images/partial.jpeg",
            description: "A Chrome extension to autofill job applications. Didn't finish.",
            url: "https://github.com/Muh-Hamza-99/partial",
            tags: [
                { name: "TypeScript", icon: "typescript" },
                { name: "React", icon: "react" },
                { name: "Nest.js", icon: "nestjs" },
                { name: "PostgreSQL", icon: "postgresql" },
                { name: "AWS", icon: "aws" },
                { name: "Go", icon: "golang" },
            ],
            featured: true,
        },
        {
            name: "Biquadris",
            image: "/images/biquadris.png",
            description: "A latinized version of Tetris using strong OOP principles.",
            url: "https://github.com/Muh-Hamza-99/biquadris",
            tags: [
                { name: "C++", icon: "cplusplus" },
                { name: "Bash", icon: "bash" },
                { name: "Git", icon: "git" }
            ],
            featured: true,
        },
        {
            name: "UWPlanr",
            image: "/images/uwplanr.png",
            description: "A course planner for the University of Waterloo students.",
            url: "https://uwplanr.netlify.app/",
            tags: [
                { name: "TypeScript", icon: "typescript" },
                { name: "React", icon: "react" },
                { name: "Python", icon: "python" },
                { name: "Flask", icon: "flask" },
                { name: "MongoDB", icon: "mongodb" },
            ],
            featured: true,
        },
        {
            name: "UWScheduler",
            image: "/images/uwaterloo.png",
            description:
                "A course scheduling app for University of Waterloo students.",
            url: "https://uw-scheduler.netlify.app/",
            tags: [
                { name: "TypeScript", icon: "typescript" },
                { name: "React", icon: "react" },
            ],
            featured: false,
            github: "https://github.com/Muh-Hamza-99/uw-schedule-planner",
        },
        {
            name: "Stock Price Prediction",
            description:
                "A full-stack S&P500 stock prediction API with managed API keys.",
            image: "/images/stockpredictionapp.jpeg",
            url: "https://github.com/Muh-Hamza-99/stock-prediction-app",
            tags: [
                { name: "TypeScript", icon: "typescript" },
                { name: "React", icon: "react" },
                { name: "Node.js", icon: "nodejs" },
                { name: "Express", icon: "express" },
                { name: "PostgreSQL", icon: "postgresql" },
                { name: "Python", icon: "python" },
            ],
            featured: false,
            github: "https://github.com/Muh-Hamza-99/stock-prediction-app",
        },
    ],
    courses: [
        {
            code: "2A",
            name: "CS 246 • CS 245 • STAT 230 • ECON 201 • SI 121R",
            image: "/images/uwaterloo.png",
            tags: [
                { name: "C++", icon: "cplusplus" },
                { name: "Bash", icon: "bash" },
                { name: "Git", icon: "git" },
            ],
            featured: true,
        },
        {
            code: "1B",
            name: "CS 136 • MATH 138 • MATH 136 • EARTH 122",
            image: "/images/uwaterloo.png",
            tags: [
                { name: "C", icon: "c" },
                { name: "Bash", icon: "bash" },
                { name: "Git", icon: "git" },
            ],
            featured: true,
        },
        {
            code: "Machine Learning Specialization",
            name: "Regression, classification, artifical neural networks and basic unsupervised techniques.",
            image: "/images/deeplearning.jpeg",
            tags: [
                { name: "Python", icon: "python" },
            ],
            featured: false,
        },
        {
            code: "1A",
            name: "CS 135 • MATH 137 • MATH 135 • ECON 101 • ENGL 109",
            image: "/images/uwaterloo.png",
            tags: [],
            featured: true,
        },
    ]
}
