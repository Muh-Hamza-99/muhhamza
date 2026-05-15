import { Link } from "react-router-dom";
import { getAllPosts } from "../lib/blog";

const BlogIndex = () => {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        Blog
      </h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Longer-form notes and projects, authored as MDX.
      </p>
      <ul className="mt-12 space-y-10">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-border pb-10 last:border-0">
            <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              <time dateTime={post.date}>{post.date}</time>
            </p>
            <h2 className="mt-2 text-xl font-semibold text-foreground md:text-2xl">
              <Link
                to={post.slug}
                className="hover:underline hover:decoration-border hover:underline-offset-4"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-muted-foreground">{post.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default BlogIndex;
