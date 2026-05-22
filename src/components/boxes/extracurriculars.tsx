import { Link } from "react-router-dom";
import { extracurriculars } from "../../lib/data";
import Section from "../section";

const Extracurriculars = () => {
  return (
    <Section rb bb lb>
      <ul className="space-y-2">
        {extracurriculars.map((extracurricular) => (
          <Link
            to={extracurricular.link}
            key={extracurricular.company}
            className="flex items-center gap-1 text-base hover:cursor-pointer hover:translate-x-1 transition-all"
          >
            <span>{extracurricular.role}</span>
            <span className="text-muted-foreground">@</span>
            <span>{extracurricular.company}</span>
            <img
              src={extracurricular.logo}
              alt=""
              width={20}
              height={20}
              className="ml-1 h-6 w-6 rounded-xs"
              loading="lazy"
            />
          </Link>
        ))}
      </ul>
    </Section>
  );
};

export default Extracurriculars;
