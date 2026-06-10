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

  const { default: PostBody } = mod;

  return (
    <main className="min-h-screen flex items-center bg-background text-foreground font-sans">
      <div className="w-full mx-auto max-w-3xl px-4 md:px-8 lg:px-16 xl:px-32">
        <Section>
          <PostBody components={mdxComponents} />
        </Section>
      </div>
    </main>
  );
};

export default BlogPost;
