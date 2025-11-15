import Image from 'next/image'
import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'

const mdxComponents = {
  h1: (props: ComponentPropsWithoutRef<'h1'>) => (
    <h1 className="text-4xl font-medium mt-8 mb-4" {...props} />
  ),
  h2: (props: ComponentPropsWithoutRef<'h2'>) => (
    <h2 className="text-3xl font-medium mt-12 mb-6" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<'h3'>) => (
    <h3 className="text-2xl font-medium mt-8 mb-4" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<'p'>) => (
    <p className="leading-relaxed text-foreground/90 mb-6" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<'a'>) => (
    <Link
      href={props.href || ''}
      className="text-primary no-underline hover:underline"
      {...props}
    />
  ),
  blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote
      className="border-l-4 border-primary/20 pl-6 italic text-muted-foreground my-6"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<'ul'>) => (
    <ul className="list-disc list-inside mb-6 space-y-2" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<'ol'>) => (
    <ol className="list-decimal list-inside mb-6 space-y-2" {...props} />
  ),
  code: (props: ComponentPropsWithoutRef<'code'>) => (
    <code
      className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<'pre'>) => (
    <pre
      className="bg-muted p-4 rounded-lg overflow-x-auto mb-6"
      {...props}
    />
  ),
  Image,
}

export default mdxComponents
