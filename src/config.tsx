import { Icons } from '@/components/icons'

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
    experiences: Record<string, Experience>
    projects: Record<string, Project>
}



export const CONFIG: Config = {
    name: 'Muhammad Hamza',
    avatar: '/images/author.png',
    title: 'CS @ UWaterloo',
    siteUrl: 'https://muhhamza.netlify.app/',
    socials: [
        {
            name: 'GitHub',
            url: 'https://github.com/Muh-Hamza-99',
            icon: 'github',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/hamzaasad/',
            icon: 'linkedin',
        },
        {
            name: 'muhammad.hamzaasad@gmail.com',
            url: 'mailto:muhammad.hamzaasad@gmail.com',
            icon: 'email',
        },
    ],
    description: (
        <>Hi, I&apos;m Hamza. Studying CS at UWaterloo. Software Engineer.</>
    ),
    descriptionRaw: `Hi, I'm Hamza. Studying CS at UWaterloo. Software Engineer.`,
    experiences: {
        "vidyard": {
            name: 'Software Developer',
            image: '/images/vidyard.jpeg',
            description: 'Working on AI avatars and main Chrome extension.',
            content: `work in progress...`
        },
        "budgie": {
            name: '53 65 63 72 65 74',
            image: '/images/budgie.png',
            description: 'making a flock of software.',
            content: `work in progress...`
        },
        "nokia": {
            name: 'Software Developer',
            image: '/images/nokia.jpeg',
            description: 'Worked on SDK for autonomous networks.',
            content: `work in progress...`
        },
        "codeverse": {
            name: 'Software Engineer',
            image: '/images/codeverse.jpeg',
            description: 'Dossier creation and document automation tool.',
            content: `work in progress...`
        },
        "twimbit": {
            name: 'Business Analyst',
            image: '/images/twimbit.jpeg',
            description: 'Dossier creation and document automation tool.',
            content: `work in progress...`
        },
    },
    projects: {
        "deframe": {
            name: 'Deframe',
            image: '/images/deframe.png',
            description: 'AI agent for deframing biases in headlines.',
            content: `work in progress...`
        },
        "_stoicvalues": {
            name: '_stoicvalues',
            image: '/images/stoicvalues.jpg',
            description: 'Automated IG bot for stoic reels.',
            content: `work in progress...`
        },
        "partial": {
            name: 'Partial',
            image: '/images/partial.jpeg',
            description:
                "A Chrome extension to autofill job applications. Didn't finish.",
            content: `work in progress...`
        },
        "uwplanr": {
            name: 'UWPlanr',
            image: '/images/uwplanr.png',
            description:
                'A course planner for the University of Waterloo students.',
            content: `work in progress...`
        },
    },
}
