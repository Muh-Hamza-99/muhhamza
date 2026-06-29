import Section from "./section";
import { Link } from "react-router-dom";
import type { Block as BlockType } from "../lib/data";

const Block = ({ block }: { block: BlockType }) => {
  return (
    <Section>
      <h2 className="font-semibold mb-2">{block.header}</h2>
      <ul className="space-y-1">
        {block.items.map((item, index) => (
          <li key={index}>
            <div className="inline-block mr-1">
              {item.logos?.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`${item.title}`}
                  className="inline-block mr-1 w-5 h-5 rounded-sm object-cover"
                />
              ))}
            </div>
            <Link
              to={item.link}
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
