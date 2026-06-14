import { useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "../mdx-components";
import { getPostBySlug } from "../lib/blog";
import Hero from "../components/hero";

const Blog = () => {
  const { slug } = useParams<{ slug: string }>();
  const mod = slug ? getPostBySlug(slug) : undefined;

  if (!mod) return null;
  const { default: PostBody } = mod;

  return (
    <main className="min-h-screen flex items-center bg-background text-foreground font-sans">
      <div className="w-full mx-auto max-w-3xl p-4 md:px-8 lg:px-16 xl:px-32">
        <Hero />
        <MDXProvider components={mdxComponents}>
          <PostBody />
        </MDXProvider>
      </div>
    </main>
  );
};

export default Blog;
