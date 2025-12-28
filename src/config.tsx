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
            content: `
<p align="center">
<img src="/content/vidyard-logo.png" alt="Vidyard Logo" />
</p>

My co-op at [Vidyard](https://www.vidyard.com/) has got to be the best co-op I have had so far. There was so much to learn and do with the amazing team I was part of there, which was extremely supportful and helpful. I worked on a lot of things and experienced the entire SDC for the first time, with [Jira](https://www.atlassian.com/software/jira?referer=jira.com), dev-staging-prod, testing and much more.

---

Throughout my co-op, I worked on various smaller tickets and bugs, which include:

- The Vidyard Chrome extension relied on the **Browser APIs** for network connectivity, which would cause issues has the APIs weren't reliable/well-supported and would occassionally cause an infinite loop of loading/no connection states! The solution involved a **fallback request** to the Vidyard API as a reference for network connectivity with React.js.
![Vidyard No Connection](/content/vidyard-no-connection.png)

- The AI Avatar recording flow couldn't let you **select other microphones!** Luckily, this was a simple fix with Vue.js, localStorage and Jest for testing.
<p align="center">
<img src="/content/vidyard-microphone-selection.png" alt="Vidyard Microphone Selection" />
</p>

- The main Vidyard platform used **VP9/VP8 codecs** for video recording on the client-side. Although okay, H264/AVC1 was a more popular option and had better hardware acceleration support. Furthermore, competitors had significantly **better metrics** when it come to recordings due to H264/AVC1 codec usage. I ended up writing a **TDD** and wrote some code to integrate the Vidyard's internal package **codec fallback chain** with the client-side code in Vue.js and JavaScript. 
<p align="center">
<img src="/content/vidyard-codecs-upgrade.png" alt="Vidyard Codecs Upgrade" />
</p>

- Mailers - I had to update email content for Vidyard's **AI Avatar License flow**. It involved using Knock mailers and playing around with Vidyard's asset management system for icons.

---
<p align="center">
<img src="/content/vidyard-virtual-backgrounds.png" alt="Virtual Backgrounds Project" />
</p>

Then came the first big project I worked on: **virtual backgrounds!** It was a highly requested feature for Vidyard customers and highly anticipated, so I am glad I was part of it! Some things I worked on include:

- General styling and UI of the virtual backgrounds selection screen in the Chrome Extension
- Managing preset and custom virtual backgrounds (uploads, deleting and selection) using Chrome's IndexedDB
- Some bugs related to UI and integrating the internal video encoding package for blurring the video stream

Most of the work involved React.js and JavaScript as it was the Chrome extension that was being dealt with.

---

![Voice Preview Project](/content/vidyard-audio-preview.png)

The voice preview project was the highlight of my co-op in my opinion. Me and another great team member worked on allowing users who are recording AIA videos to **preview their voice** with the script provided. Some things I worked on include:

- Feature flagging using LaunchDarkly
- Integrating and extended an audio player component using Vue.js and GraphQL for fetching audios from the backend avatar service
- Managing audios in context to prevent regeneration of the same audio by passing the audio ID to the backend
- Worked on a new voice generation route in Node.js, GraphQL and MySQL that either generated a new audio or referenced an existing audio for video generation

---

Overall, I loved my time at Vidyard. I feel like I was a bit slow to learn and get things done because there was so much to learn, and I apologize to the team! However, it was an absolute blast and I would love to work at Vidyard again.
`
        },
        "falcon": {
            name: 'Founder',
            image: '/images/falcon.png',
            description: 'making a flock of software.',
            content: `
![falcon cover](/content/falcon-cover.png)

falcon is an internship dashboard I made to try and cut through the fluff a lot of similar products provide with unnecessary features, credit card enabled free trials and much more.

It is a simple dashboard which gets jobs from 500+ companies across multiple ATS platforms in one place - and it gets them *fast*, usually way before postings blow up on LinkedIn. As of now, falcon is aimed towards Canadian students, since many universities have comprehensive co-op programs.

---

When doing some research on how I was going to build this tool, there were two things that I wanted:

- Minimal to no scraping (especially from LinkedIn) due to legal reasons and…well, scraping :(
- Direct from the source - I wanted falcon to get jobs straight from the underlying tools companies used for talent acquisition.

This is where ChatGPT gave me what I believe to be the holy grail of this app, ATS APIs. Essentially, many ATS platforms (Greenhouse, Lever, Workday, etc.) have public/exposed routes which provided up-to-date job postings which could be accessed in a reliable and efficient way.

\`\`\`bash
curl -X GET "https://boards-api.greenhouse.io/v1/boards/coinbase/jobs"
\`\`\`

---

With this, I created workers for what I call, the \`Big 4\` of ATS companies for an MVP, with each worker getting jobs within the closest timeframe to now, ensuring they are internships and within US/Canada (for now) and saving the job to the database:

- Greenhouse - the biggest of the lot
- Workday - the worst of the lot
- Lever - the simplest of the lot
- Ashby - the best of the lot

All except Workday had public API routes while Workday had a sort of hidden public route which can be found in the Networks tab in Chrome’s DevTools - this became the goto method to figuring out whether a company uses a specific ATS platform and whether it is accessible.

![falcon devtools](/content/falcon-devtools.png)

---

With that, I began working on the website itself. I created a working UI within a week using React.js, ShadCN, TailwindCSS and MagicUI (awesome library). The API took some more time, since I had to work with and test a custom Google OAuth flow along with Stripe webhooks. The backend (API + workers) was made using Golang and PostgreSQL, and all was merry until I realized that I had to deal with manage cookies.

The issue was, although authentication worked on certain browsers, it didn’t work on most (Apple devices, Brave, etc.) during production. And after realizing that I am reinventing the wheel, a friend of mine suggested using Clerk, which ended up fixing all the 🍪 problems. And with that, I soft-launched the MVP!

---

A major learning in launching the MVP was deployment. I actually got a domain, configured DNS records and built and hosted the client, API, database and workers on GCP, mainly using gcloud. At first, the API and workers were bundled together, but that caused CPU utilization to reach high levels despite low traffic when the workers were running (which is every ***15 minutes!***)

![falcon architecture](/content/falcon-architecture.png)

---

After deploying the MVP, I made a couple of UI fixes to the dashboard for searching and user experience before focusing my work on expanding my worker arsenal. At this point, falcon was looking at around 120-130 companies, and so, after some more research and <kbd>Ctrl + Shift + I</kbd> ing on websites:

- Added more companies to existing worker’s lists
- Found and strategized workers for new ATS companies such as Eightfold.ai, iCIMS, UKG, SAP Successfactors, Oracle Cloud, Dayforce and Y Combinator.

These new ATS platforms presented a new set of challenges. For example,

- APIs had pagination and a large number of job postings at one time (upto 2000!) To combat this, these APIs also provided a sorting feature, allowing me to only process jobs posted in the current day for minimal and efficient processing.
- SAP itself didn’t have an API. However, companies which use it have a very standard and templated website, with query parameters for sorting and filtering and a simple HTML structure.
![falcon sap](/content/falcon-sap.png)
- iCIMS has APIs for job postings but requires you to be a partner (no third parties like me :\). However, there are multiple companies which expose the iCIMS route under their domain. For example, Docusign exposes such a route but not Kinaxis.
- Dayforce and Y Combinator were the first workers that required the usage of **CSRF** tokens, so each worker intialization requires a CSRF token as well.

I have made special workers for Microsoft and Amazon as well, but have vowed to minimize such specialized and low-return workers. I am also eyeing my next ATS', Avature and iCIMS, so stay tuned for that!

---

Also, I have been trying to market this across [LinkedIn](https://www.linkedin.com/company/tryfalcon) (mainly), and developed a Python UGC bot! Please do check it out and reach out if you have any feedback/questions! falcon currently has 50+ users and a decent MRR!
            `
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
