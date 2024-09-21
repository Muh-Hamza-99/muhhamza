import Link from "next/link"
import React from "react"

import { Icons } from "@/components/icons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface CourseProps {
    code: string
    name: string
    description: string
    tags: {
        name: string
        icon: keyof typeof Icons
    }[]
    notes?: string
}

const Course = ({
    code,
    name,
    description,
    tags,
    notes,
}: CourseProps) => {
    return (
        <Card className="group rounded-none border-none bg-accent/60 from-neutral-800/10 p-4 dark:bg-neutral-900 dark:hover:bg-gradient-to-bl sm:rounded-lg">
            <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between">
                    <div className="flex items-start gap-2">
                        <div>
                            <h3>{code} - {name}</h3>
                            <p className="text-sm text-muted-foreground">
                                {description}
                            </p>
                        </div>
                    </div>
                        <div className="flex">
                            <TooltipProvider delayDuration={70}>
                                {notes && (
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                asChild
                                                size={"icon"}
                                                variant={"ghost"}
                                                className="shrink-0"
                                            >
                                                <Link
                                                    href={notes}
                                                    target="_blank"
                                                    aria-label="Notes"
                                                >
                                                    <Icons.externalLink className="size-4" />
                                                </Link>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent
                                            side="bottom"
                                            className="bg-transparent text-xs"
                                        >
                                            Course Notes
                                        </TooltipContent>
                                    </Tooltip>
                                )}
                            </TooltipProvider>
                        </div>
                </div>

                <div>
                    {tags && (
                        <ul className="mt-2 flex flex-wrap gap-1">
                            {tags.map((tag, idx) => {
                                const Icon = Icons[tag.icon]
                                return (
                                    <li key={idx}>
                                        <Badge variant={"outline"}>
                                            <Icon className="mr-1.5 h-3 w-3 transition-all group-hover:saturate-100 md:saturate-0" />{" "}
                                            {tag.name}
                                        </Badge>
                                    </li>
                                )
                            })}
                        </ul>
                    )}
                </div>
            </div>
        </Card>
    )
}

export default Course