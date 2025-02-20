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
            Hi, I&apos;m Hamza. Studying Computer Science at the University of Waterloo. Currently interning @ Nokia.
        </>
    ),
    descriptionRaw: `Hi, I'm Hamza. Studying Computer Science at the University of Waterloo. Currently interning @ Nokia.`,
    experiences: [
        {
            name: "Automation and AI/ML Developer",
            image: "/images/nokia.jpeg",
            description: "Cloud network services.",
            url: "https://www.nokia.com/",
            tags: [],
            featured: true,
        },
        {
            name: "Software Engineer",
            image: "/images/codeverse.jpeg",
            description: "Helping foster STEM-based learning in Saudi Arabia.",
            url: "https://codeverseorg.netlify.app",
            tags: [
                { name: "TypeScript", icon: "typescript" },
                { name: "Next", icon: "nextjs" },
                { name: "GCP", icon: "gcp" },
            ],
            featured: true,
        },
        {
            name: "Business Analyst",
            image: "/images/twimbit.jpeg",
            description: "Carrying out research and automating the process.",
            url: "https://twimbit.com",
            tags: [
                { name: "Python", icon: "python" },
                { name: "PostgreSQL", icon: "postgresql" },
                { name: "AWS", icon: "aws" },
                { name: "Docker", icon: "docker" },
            ],
            featured: true,
        },
        {
            name: "Coding Instructor",
            image: "/images/createch.jpeg",
            description: "Teaching students at MRIS about programming and produce management.",
            url: "",
            tags: [
                { name: "HTML", icon: "html" },
                { name: "CSS", icon: "css" },
                { name: "JavaScript", icon: "javascript" },
                { name: "React", icon: "react" },
                { name: "Node.js", icon: "nodejs" },
            ],
            featured: false,
        }
    ],
    projects: [
        {
            name: "Partial",
            image: "/images/partial.jpeg",
            description:
                "A Chrome extension to fill in job applications for you. Didn't finish.",
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
            description:
                "A latinization of Tetris.",
            url: "https://github.com/Muh-Hamza-99/biquadris",
            tags: [
                { name: "C++", icon: "cplusplus" },
                { name: "Bash", icon: "bash" },
            ],
            featured: true,
        },
        {
            name: "UWPlanr",
            image: "/images/uwplanr.png",
            description:
                "A tool to help students at the University of Waterloo plan their courses.",
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
                "A tool to help UWaterloo students schedule their courses.",
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
                "An app to predict stock prices using SVMs through an interface for managing keys and requests.",
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
        {
            name: "Wudroid",
            description:
                "A Discord bot for a personal server. Includes music player, money system, permission-based commands, etc.",
            image: "/images/discord.png",
            url: "https://github.com/Muh-Hamza-99/wudroid",
            tags: [
                { name: "JavaScript", icon: "javascript" },
                { name: "Node.js", icon: "nodejs" },
                { name: "MongoDB", icon: "mongodb" },
            ],
            featured: false,
            github: "https://github.com/Muh-Hamza-99/wudroid",
        }
    ],
    courses: [
        {
            code: "CS 246",
            name: "Object-Oriented Software Development",
            image: "/images/uwaterloo.png",
            tags: [
                { name: "C++", icon: "cplusplus" },
                { name: "Bash", icon: "bash" },
                { name: "Git", icon: "git" },
            ],
            featured: true,
        },
        {
            code: "CS 245",
            name: "Logic and Computation",
            image: "/images/uwaterloo.png",
            tags: [],
            featured: false,
        },
        {
            code: "STAT 230",
            name: "Probability",
            image: "/images/uwaterloo.png",
            tags: [],
            featured: false,
        },
        {
            code: "ECON 201",
            name: "Microeconomic Theory I",
            image: "/images/uwaterloo.png",
            tags: [],
            featured: false,
        },
        {
            code: "SI 121R",
            name: "Islam in the World",
            image: "/images/uwaterloo.png",
            tags: [],
            featured: false,
        },
        {
            code: "CS 136",
            name: "Algorithm Design and Data Abstraction",
            image: "/images/uwaterloo.png",
            tags: [
                { name: "C", icon: "c" },
                { name: "Bash", icon: "bash" },
                { name: "Git", icon: "git" },
            ],
            featured: true,
        },
        {
            code: "MATH 138",
            name: "Calculus II",
            image: "/images/uwaterloo.png",
            tags: [],
            featured: false,
        },
        {
            code: "MATH 136",
            name: "Linear Algebra I",
            image: "/images/uwaterloo.png",
            tags: [
                { name: "LaTeX", icon: "latex" }
            ],
            featured: false,
        },
        {
            code: "EARTH 122",
            name: "Introductory Environmental Sciences",
            image: "/images/uwaterloo.png",
            tags: [],
            featured: false,
        },
        {
            code: "CS 135",
            name: "Designing Functional Programs",
            image: "/images/uwaterloo.png",
            tags: [],
            featured: true,
        },
        {
            code: "MATH 137",
            name: "Calculus I",
            image: "/images/uwaterloo.png",
            tags: [],
            featured: false,
        },
        {
            code: "MATH 135",
            name: "Algebra",
            image: "/images/uwaterloo.png",
            tags: [
                { name: "LaTeX", icon: "latex" }
            ],
            featured: false,
        },
        {
            code: "ECON 101",
            name: "Microeconomics",
            image: "/images/uwaterloo.png",
            tags: [],
            featured: false,
        },
        {
            code: "ENGL 109",
            name: "Academic Writing",
            image: "/images/uwaterloo.png",
            tags: [],
            featured: false,
        },
    ]
}
