import { projects } from "../../lib/data";
import Section from "../section";

const Projects = () => {
  return (
    <Section rb bb lb>
      <ul className="space-y-2">
        {projects.map((project) => (
          <li
            key={project.name}
            className="flex flex-wrap items-baseline gap-x-2 text-base hover:cursor-pointer hover:translate-x-1 transition-all"
          >
            <span className="font-medium">{project.name}</span>
            <span className="text-muted-foreground">{project.description}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Projects;
