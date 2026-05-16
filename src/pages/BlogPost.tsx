import { MDXProvider } from "@mdx-js/react";
import { Link, useParams } from "react-router-dom";
import { mdxComponents } from "../mdx-components";
import { getPostBySlug } from "../lib/blog";
import Section from "../components/section";

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
    <main className="min-h-screen flex items-center bg-background text-foreground font-sans">
      <div className="w-full mx-auto max-w-4xl px-4 md:px-8 lg:px-16 xl:px-32">
        <MDXProvider components={mdxComponents}>
          <Section tb rb bb lb>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-y-1">
                <h1 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  {meta.title}
                </h1>
                <p className="text-base md:text-lg text-muted-foreground">
                  {meta.description}
                </p>
              </div>
              {meta.logo && (
                <img
                  src={meta.logo}
                  alt=""
                  width={40}
                  height={40}
                  className="h-8 w-8 md:h-10 md:w-10 rounded-sm"
                  loading="lazy"
                />
              )}
            </div>
          </Section>
          <Section rb bb lb>
            <PostBody />
          </Section>
        </MDXProvider>
      </div>
    </main>
  );
};

export default BlogPost;
