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
import Course from "@/components/course"

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
                            <BreadcrumbPage>Courses</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <ModeToggle />
            </div>
            <h1 className="animate-slide-from-down-and-fade-2 scroll-m-20 px-4 text-4xl font-bold tracking-tight">
                All Courses
            </h1>
            <div className="animate-slide-from-down-and-fade-3 space-y-3 pt-12">
                {CONFIG.courses.map((course, idx) => (
                    <Course
                        key={idx}
                        code={course.code}
                        name={course.name}
                        description={course.description}
                        notes={course.notes}
                        tags={course.tags}
                    />
                ))}
            </div>
        </div>
    )
}

export default Experiences
