import Section from "./section";
import Link from "next/link";
import type { Block } from "../types/data";

const Block = ({ block }: { block: Block }) => {
  return (
    <Section>
      <h2 className="font-semibold mb-2">{block.header}</h2>
      <ul className="space-y-1">
        {block.items.map((item, index) => (
          <li key={index}>
            {item.logo && (
              <img
                key={index}
                src={item.logo}
                alt={`${item.title}`}
                className="inline-block mr-2 w-5 h-5 rounded-sm object-cover"
              />
            )}
            <Link
              href={item.link}
              className="mr-2 inline-block underline underline-offset-2"
            >
              {item.title}
            </Link>
            <span className="text-muted-foreground">{item.description}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Block;
