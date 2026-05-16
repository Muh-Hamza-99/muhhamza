import type { ComponentPropsWithoutRef } from "react";

export const mdxComponents = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className="mt-6 text-xl font-semibold tracking-tight text-foreground first:mt-0 md:text-2xl"
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mt-4 text-lg font-semibold tracking-tight text-foreground md:text-xl"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="mt-2 text-base font-semibold text-foreground" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p
      className="mt-2 text-base leading-relaxed text-muted-foreground first:mt-0"
      {...props}
    />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      className="text-foreground underline decoration-border underline-offset-4 hover:decoration-muted-foreground"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground"
      {...props}
    />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="mt-4 list-decimal space-y-2 pl-6 text-muted-foreground"
      {...props}
    />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="mt-4 border-l-2 border-border pl-4 text-muted-foreground italic"
      {...props}
    />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.9em] text-foreground"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="mt-4 overflow-x-auto rounded border border-border bg-card p-4 font-mono text-sm text-card-foreground"
      {...props}
    />
  ),
  hr: (props: ComponentPropsWithoutRef<"hr">) => (
    <hr className="my-10 border-border" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
};
