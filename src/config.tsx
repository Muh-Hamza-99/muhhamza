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
        featured: boolean
    }[]
    projects: {
        name: string
        image: string
        description: string
        url: string
        github?: string
        featured: boolean
    }[]
    courses: {
        code: string
        image?: string
        name: string
        featured: boolean
        notes?: string
    }[]
}

export const CONFIG: Config = {
    name: "Muhammad Hamza",
    avatar: "/images/author.png",
    title: "CS @ UWaterloo",
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
            Hi, I&apos;m Hamza. Studying CS at UWaterloo. Software Engineer.
        </>
    ),
    descriptionRaw: `Hi, I'm Hamza. Studying CS at UWaterloo. Software Engineer.`,
    experiences: [
        {
            name: "Software Developer",
            image: "/images/vidyard.jpeg",
            description: "Working on AI avatars and main Chrome extension.",
            url: "https://www.vidyard.com/",
            featured: true,
        },
        {
            name: "Software Developer",
            image: "/images/nokia.jpeg",
            description: "Worked on SDK for autonomous networks.",
            url: "https://www.nokia.com/",
            featured: true,
        },
        {
            name: "Software Engineer",
            image: "/images/codeverse.jpeg",
            description: "Created landing page for Codeverse.",
            url: "https://codeverseorg.netlify.app",
            featured: true,
        },
        {
            name: "Business Analyst",
            image: "/images/twimbit.jpeg",
            description: "Dossier creation and document automation tool.",
            url: "https://twimbit.com",
            featured: false,
        },
        {
            name: "Coding Instructor",
            image: "/images/createch.jpeg",
            description: "Taught lessons about coding to a cohort of students.",
            url: "",
            featured: false,
        }
    ],
    projects: [
        {
            name: "Deframe",
            image: "/images/deframe.png",
            description: "AI agent for deframing biases in headlines.",
            url: "https://www.deframe.ai",
            featured: true,
        },
        {
            name: "_stoicvalues",
            image: "/images/stoicvalues.jpg",
            description: "Automated IG bot for stoic reels.",
            url: "https://www.instagram.com/_stoicvalues/",
            featured: true,
        },
        {
            name: "Partial",
            image: "/images/partial.jpeg",
            description: "A Chrome extension to autofill job applications. Didn't finish.",
            url: "https://github.com/Muh-Hamza-99/partial",
            featured: false,
        },
        {
            name: "Biquadris",
            image: "/images/biquadris.png",
            description: "A latinized version of Tetris using strong OOP principles.",
            url: "https://github.com/Muh-Hamza-99/biquadris",
            featured: false,
        },
        {
            name: "UWPlanr",
            image: "/images/uwplanr.png",
            description: "A course planner for the University of Waterloo students.",
            url: "https://uwplanr.netlify.app/",
            featured: true,
        },
        {
            name: "UWScheduler",
            image: "/images/uwaterloo.png",
            description: "A course scheduling app for University of Waterloo students.",
            url: "https://uw-scheduler.netlify.app/",
            featured: false,
            github: "https://github.com/Muh-Hamza-99/uw-schedule-planner",
        },
        {
            name: "Stock Price Prediction",
            description: "A full-stack S&P500 stock prediction API with managed API keys.",
            image: "/images/stockpredictionapp.jpeg",
            url: "https://github.com/Muh-Hamza-99/stock-prediction-app",
            featured: false,
            github: "https://github.com/Muh-Hamza-99/stock-prediction-app",
        },
    ],
    courses: [
        {
            code: "2B",
            name: "CS 240 • CS 241 • CS 251 • MATH 239 • ECON 371",
            image: "/images/uwaterloo.png",
            featured: true,
        },
        {
            code: "2A",
            name: "CS 246 • CS 245 • STAT 230 • ECON 201 • SI 121R",
            image: "/images/uwaterloo.png",
            featured: true,
        },
        {
            code: "1B",
            name: "CS 136 • MATH 138 • MATH 136 • EARTH 122",
            image: "/images/uwaterloo.png",
            featured: true,
        },
        {
            code: "1A",
            name: "CS 135 • MATH 137 • MATH 135 • ECON 101 • ENGL 109",
            image: "/images/uwaterloo.png",
            featured: false,
        },
    ]
}
