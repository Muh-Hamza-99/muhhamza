import Link from "next/link"

import { ModeToggle } from "@/components/mode-toggle"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { CONFIG } from "@/config"
import Experience from "@/components/experience"

export const metadata = {
    title: "Experiences",
}

const Experiences = () => {
    return (
        <div>
            <div className="flex animate-slide-from-down-and-fade-1 items-start justify-between">
                <Breadcrumb className="mb-4 px-4">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Experiences</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <ModeToggle />
            </div>
            <h1 className="animate-slide-from-down-and-fade-2 scroll-m-20 px-4 text-4xl font-bold tracking-tight">
                All Experiences
            </h1>
            <div className="animate-slide-from-down-and-fade-3 space-y-3 pt-12">
                {CONFIG.experiences.map((project, idx) => (
                    <Experience
                        key={idx}
                        name={project.name}
                        description={project.description}
                        image={project.image}
                        url={project.url}
                    />
                ))}
            </div>
        </div>
    )
}

export default Experiences
