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
            description: "Developed an SEO-optimized landing page with an admin panel using Next.js and SQLite, along with a email database with Google Cloud Platform (Google Sheets).",
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
            description: "Researched 35+ companies, providing strategic insights to clients. Developed a Python and PostgreSQL automation tool that cut dossier creation time by 90% and integrated LLMs, e.g.: GPT-4 and Gemini, to streamline content generation.",
            url: "https://twimbit.com",
            tags: [
                { name: "Python", icon: "python" },
                { name: "PostgreSQL", icon: "postgresql" },
                { name: "Docker", icon: "docker" },
            ],
            featured: true,
        },
        {
            name: "Coding Instructor",
            image: "/images/createch.jpeg",
            description: "Led an 8-week program training 40+ students in technical development and project management. Launched a collaborative initiative where teams built and maintained websites for businesses in Riyadh.",
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
                "Developed a Golang and Redis mailing service using concurrency along with an email editor. Built a full-stack app using React, Nest.js, and PostgreSQL. Created a Chrome extension with JavaScript and conducted EDA on job application platforms. Didn't finish.",
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
                "Developed a latinized version of Tetris in C++ using strong OOP principles. Created testing scripts with Bash. Worked with a team, utilizing Git for version control.",
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
            description:
                "Built a Flask server to serve and structure course data from the UW API, storing it in MongoDB. Automated 70-80% of course parsing using RegEx, Python, and Selenium, integrating it with a React UI. Attracted 2,500+ visits during MVP launch.",
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
                "Developed a course scheduling app for UW students via a user-friendly interface using TypeScript and React. Conducted A/B testing to validate the concept, gathering feedback that led to 10+ bug fixes and improvements.",
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
                "Trained SVM models using SKLearn to improve accuracy and reduce overfitting for 200+ stocks. Built a RESTful API with Express and PostgreSQL, enabling data persistence and a user dashboard for tracking API requests and keys.",
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
