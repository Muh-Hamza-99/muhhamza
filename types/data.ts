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