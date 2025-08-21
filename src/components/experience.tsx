import Image from "next/image"
import Link from "next/link"
import React from "react"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface ExperienceProps {
    name: string
    description: string
    image?: string
    url: string
    testimonial?: string
    github?: string
}

const Experience = ({
    name,
    description,
    image,
    url,
    github,
}: ExperienceProps) => {
    return (
        <Card className="group rounded-none border-none bg-accent/60 from-neutral-800/10 p-4 dark:bg-neutral-900 dark:hover:bg-gradient-to-bl sm:rounded-lg">
            <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between">
                    <div className="flex items-start gap-2">
                        {image && (
                            <Image
                                src={image}
                                width={64}
                                height={64}
                                alt="fds"
                                className="h-12 w-auto shrink-0 rounded-md"
                            />
                        )}
                        <div>
                            <h3>{name}</h3>
                            <p className="text-sm text-muted-foreground">
                                {description}
                            </p>
                        </div>
                    </div>
                    {url && (
                        <div className="flex">
                            <TooltipProvider delayDuration={70}>
                                {github && (
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                asChild
                                                size={"icon"}
                                                variant={"ghost"}
                                                className="shrink-0"
                                            >
                                                <Link
                                                    href={github}
                                                    target="_blank"
                                                    aria-label="Github"
                                                >
                                                    <Icons.github className="size-4" />
                                                </Link>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent
                                            side="bottom"
                                            className="bg-transparent text-xs"
                                        >
                                            Source Code
                                        </TooltipContent>
                                    </Tooltip>
                                )}
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            asChild
                                            size={"icon"}
                                            variant={"ghost"}
                                            className="shrink-0"
                                        >
                                            <Link
                                                href={url}
                                                target="_blank"
                                                aria-label="Visit Website"
                                            >
                                                <Icons.externalLink className="size-4" />
                                            </Link>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent
                                        side="bottom"
                                        className="bg-transparent text-xs"
                                    >
                                        Visit Website
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    )}
                </div>
            </div>
        </Card>
    )
}

export default Experience
