import { experiences } from "../../lib/data";
import Section from "../section";

const Experiences = () => {
  return (
    <Section rb bb lb>
      <ul className="space-y-2">
        {experiences.map((experience) => (
          <li
            key={experience.company}
            className="flex items-center gap-1 text-base hover:cursor-pointer hover:translate-x-1 transition-all"
          >
            <span>{experience.role}</span>
            <span className="text-muted-foreground">@</span>
            <span>{experience.company}</span>
            <img
              src={experience.logo}
              alt=""
              width={20}
              height={20}
              className="ml-1 h-6 w-6 rounded-sm"
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Experiences;
