import Section from "./section";
import Card from "./card";
import { FEATURED_PROJECTS } from "../lib/data";

const Projects = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {FEATURED_PROJECTS.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
