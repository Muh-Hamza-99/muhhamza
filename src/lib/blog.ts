import type { ComponentType } from "react";

export type BlogMeta = {
  title: string;
  description: string;
  date: string;
  slug: string;
  logo?: string;
};

export type BlogPostModule = {
  default: ComponentType;
  meta: BlogMeta;
};

const postModules = import.meta.glob<BlogPostModule>("../content/*.mdx", {
  eager: true,
});

const slugFromPath = (path: string): string | undefined => {
  const m = path.match(/\/([^/]+)\.mdx$/);
  return m?.[1];
};

export function getAllPosts(): BlogMeta[] {
  const list: BlogMeta[] = [];
  for (const path of Object.keys(postModules)) {
    const mod = postModules[path];
    if (!mod?.meta) continue;
    list.push(mod.meta);
  }
  return list.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPostModule | undefined {
  const path = `../content/${slug}.mdx`;
  return postModules[path];
}

export function getSlugs(): string[] {
  return Object.keys(postModules)
    .map((p) => slugFromPath(p))
    .filter((s): s is string => Boolean(s));
}
