import { MDXRemote } from 'next-mdx-remote/rsc'
import mdxComponents from '@/components/mdx-components'
import { ModeToggle } from '@/components/mode-toggle'
import Link from 'next/link'
import { ArrowUpLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { CONFIG } from '@/config'

type Params = {
    slug: string
}

export default function BlogPostPage({ params }: { params: Params }) {
    const { slug } = params
    const { name, description, content } = CONFIG.experiences[slug]

    return (
        <div>
            <header className="flex w-full animate-slide-from-down-and-fade-1 flex-col gap-6 px-4">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className={cn(
                            buttonVariants({
                                variant: "outline",
                            }),
                            "size-8 bg-transparent p-0 text-muted-foreground transition-colors duration-200 group hover:text-foreground md:size-10"
                        )}
                    >
                        <ArrowUpLeft className="group-hover:-rotate-45 transition-transform duration-200 size-5 md:size-6" />
                    </Link>
                    <ModeToggle />
                </div>
            </header>

            <div className='mb-8 border-b border-border pb-4'>
                <h1 className='mt-4 text-3xl font-bold'>{name}</h1>
                <p className='mt-2 text-lg text-muted-foreground'>{description}</p>
            </div>

            <article className='prose prose-neutral dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-muted prose-pre:border prose-pre:border-border'>
                <MDXRemote source={content} components={mdxComponents} />
            </article>
        </div>
    )
}
