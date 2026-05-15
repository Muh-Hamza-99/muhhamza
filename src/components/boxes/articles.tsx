import { Link } from "react-router-dom";
import { getAllPosts } from "../../lib/blog";
import Section from "../section"

const Articles = () => {
    const posts = getAllPosts();
  return (
    <>
       {posts.map((post) => (
          <Section key={post.slug} bb>
            <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              <time dateTime={post.date}>{post.date}</time>
            </p>
            <h2 className="mt-2 text-base font-semibold text-foreground md:text-lg">
              <Link
                to={post.slug}
                className="hover:underline hover:decoration-border hover:underline-offset-4"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">{post.description}</p>
          </Section>
        ))}
    </>
  )
}

export default Articles