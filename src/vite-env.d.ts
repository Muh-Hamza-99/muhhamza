/// <reference types="vite/client" />

declare module "*.mdx" {
  export const meta: {
    title: string;
    description: string;
    date: string;
    slug: string;
  };

  const MDXComponent: React.ComponentType<{ components?: Record<string, React.ComponentType<any>> }>;
  export default MDXComponent;
}
