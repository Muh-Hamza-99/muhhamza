import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const Experience = ({
    name,
    description,
    image,
}: Experience) => {
    return (
        <Card className='rounded-none border-none bg-accent/60 from-neutral-800/10 p-4 dark:bg-neutral-900 dark:hover:bg-gradient-to-bl sm:rounded-lg'>
            <div className='flex flex-col gap-2'>
                <div className='flex items-start justify-between'>
                    <div className='flex items-start gap-3'>
                    {image && (
                            <Image
                                src={image}
                                width={64}
                                height={64}
                                alt='fds'
                                className='h-12 w-auto shrink-0 rounded-md'
                            />
                        )}
                        <div>
                            <h3>{name}</h3>
                            <p className='text-sm text-muted-foreground'>
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default Experience
