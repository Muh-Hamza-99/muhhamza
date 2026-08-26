type Item = {
  title: string;
  link: string;
  description: string;
  logo?: string;
};

export type Block = {
  header: string;
  items: Item[];
};

export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};