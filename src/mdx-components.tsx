import type { ComponentPropsWithoutRef } from "react";

export const mdxComponents = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => {
    const { className, ...rest } = props;
    return (
      <h1
        className={`mt-6 text-lg font-bold tracking-tight text-foreground first:mt-0 ${className || ""}`}
        {...rest}
      />
    );
  },
  h2: (props: ComponentPropsWithoutRef<"h2">) => {
    const { className, ...rest } = props;
    return (
      <h2
        className={`mt-4 font-semibold tracking-tight text-foreground${className || ""}`}
        {...rest}
      />
    );
  },
  h3: (props: ComponentPropsWithoutRef<"h3">) => {
    const { className, ...rest } = props;
    return (
      <h3
        className={`mt-2 text-base font-semibold text-foreground ${className || ""}`}
        {...rest}
      />
    );
  },
  p: (props: ComponentPropsWithoutRef<"p">) => {
    const { className, ...rest } = props;
    return (
      <p
        className={`mt-2 text-base leading-relaxed text-muted-foreground first:mt-0 ${className || ""}`}
        {...rest}
      />
    );
  },
  a: (props: ComponentPropsWithoutRef<"a">) => {
    const { className, ...rest } = props;
    return (
      <a
        className={`text-foreground decoration-border underline-offset-4 hover:decoration-muted-foreground ${className || ""}`}
        {...rest}
      />
    );
  },
  ul: (props: ComponentPropsWithoutRef<"ul">) => {
    const { className, ...rest } = props;
    return (
      <ul
        className={`mt-4 list-disc space-y-2 pl-6 text-muted-foreground ${className || ""}`}
        {...rest}
      />
    );
  },
  ol: (props: ComponentPropsWithoutRef<"ol">) => {
    const { className, ...rest } = props;
    return (
      <ol
        className={`mt-4 list-decimal space-y-2 pl-6 text-muted-foreground ${className || ""}`}
        {...rest}
      />
    );
  },
  li: (props: ComponentPropsWithoutRef<"li">) => {
    const { className, ...rest } = props;
    return <li className={`leading-relaxed ${className || ""}`} {...rest} />;
  },
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => {
    const { className, ...rest } = props;
    return (
      <blockquote
        className={`mt-4 border-l-2 border-border pl-4 text-muted-foreground italic ${className || ""}`}
        {...rest}
      />
    );
  },
  code: (props: ComponentPropsWithoutRef<"code">) => {
    const { className, ...rest } = props;
    return (
      <code
        className={`rounded bg-muted px-1.5 py-0.5 font-mono text-[0.9em] text-foreground ${className || ""}`}
        {...rest}
      />
    );
  },
  pre: (props: ComponentPropsWithoutRef<"pre">) => {
    const { className, ...rest } = props;
    return (
      <pre
        className={`mt-4 overflow-x-auto rounded border border-border bg-card p-4 font-mono text-sm text-card-foreground ${className || ""}`}
        {...rest}
      />
    );
  },
  hr: (props: ComponentPropsWithoutRef<"hr">) => {
    const { className, ...rest } = props;
    return (
      <hr className={`my-10 border-border ${className || ""}`} {...rest} />
    );
  },
  strong: (props: ComponentPropsWithoutRef<"strong">) => {
    const { className, ...rest } = props;
    return (
      <strong
        className={`font-semibold text-foreground ${className || ""}`}
        {...rest}
      />
    );
  },
};
