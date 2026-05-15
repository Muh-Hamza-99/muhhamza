import { Link, Outlet } from "react-router-dom";

const BlogLayout = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-4 md:px-6">
          <Link
            to="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Home
          </Link>
          <Link
            to="/blog"
            className="text-sm font-medium text-foreground underline decoration-border underline-offset-4"
          >
            Blog
          </Link>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default BlogLayout;
