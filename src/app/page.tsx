import Experience from '@/components/experience'
import Header from '@/components/header'
import Project from '@/components/project'
import { CONFIG } from '@/config'
import Link from 'next/link'

export default function Home() {
    return (
        <div className='flex flex-col gap-12'>
            <Header />
            <div className='animate-slide-from-down-and-fade-2 space-y-2 px-4'>
                <h2 className='font-semibold'>About me</h2>
                <p className='leading-6 text-muted-foreground'>
                    {CONFIG.description}
                </p>
            </div>
            <div className='flex animate-slide-from-down-and-fade-3 flex-col gap-3'>
                <h2 className='px-4 font-semibold'>Work</h2>
                {Object.entries(CONFIG.experiences).map(([slug, experience], idx) => (
                    <Link href={`/work/${slug}`} key={idx} className='hover:cursor-pointer'>
                        <Experience
                            key={idx}
                            name={experience.name}
                            description={experience.description}
                            image={experience.image}
                            content={experience.content}
                        />
                    </Link>
                ))}
            </div>
            <div className='flex animate-slide-from-down-and-fade-3 flex-col gap-3'>
                <h2 className='px-4 font-semibold'>Projects</h2>
                {Object.entries(CONFIG.projects).map(([slug, project], idx) => (
                    <Link href={`/projects/${slug}`} key={idx} className='hover:cursor-pointer'>
                        <Project
                            key={idx}
                            name={project.name}
                            description={project.description}
                            image={project.image}
                            content={project.content}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}
