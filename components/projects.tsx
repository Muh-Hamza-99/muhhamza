import Section from "./section";
import Card from "./card";
import { PROJECTS } from "../lib/data";

const Projects = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
