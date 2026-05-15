import { Link } from "react-router-dom";
import Section from "../section";
import { getAllPosts } from "../../lib/blog";

const LatestWriting = () => {
  const [latest] = getAllPosts();
  if (!latest) {
    return (
      <Section>
        <h1 className="font-mono uppercase">Writing</h1>
        <p className="text-muted-foreground">No posts yet.</p>
      </Section>
    );
  }

  return (
    <Section>
      <h1 className="font-mono uppercase">{latest.title}</h1>
      <p className="text-muted-foreground">{latest.description}</p>
      <Link
        to={`/blog/${latest.slug}`}
        className="mt-3 inline-block text-sm text-foreground underline decoration-border underline-offset-4 hover:decoration-muted-foreground"
      >
        Read post →
      </Link>
      <Link
        to="/blog"
        className="mt-2 block text-sm text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground"
      >
        All posts
      </Link>
    </Section>
  );
};

export default LatestWriting;
