import { MDXProvider } from "@mdx-js/react";
import { Link, useParams } from "react-router-dom";
import { mdxComponents } from "../mdx-components";
import { getPostBySlug } from "../lib/blog";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const mod = slug ? getPostBySlug(slug) : undefined;

  if (!slug || !mod) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 md:px-6">
        <p className="text-muted-foreground">This post could not be found.</p>
        <Link
          to="/blog"
          className="mt-6 inline-block text-foreground underline decoration-border underline-offset-4"
        >
          ← All posts
        </Link>
      </main>
    );
  }

  const { default: PostBody, meta } = mod;

  return (
    <MDXProvider components={mdxComponents}>
      <article className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
          <time dateTime={meta.date}>{meta.date}</time>
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {meta.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{meta.description}</p>
        <div className="mt-12">
          <PostBody />
        </div>
        <footer className="mt-16 border-t border-border pt-8">
          <Link
            to="/blog"
            className="text-sm text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground"
          >
            ← All posts
          </Link>
        </footer>
      </article>
    </MDXProvider>
  );
};

export default BlogPost;
