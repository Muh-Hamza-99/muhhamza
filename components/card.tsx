import Link from "next/link";
import type { Project } from "../types/data";

const Card = ({ project }: { project: Project }) => {
  return (
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-ring"
    >
      <img
        src={project.image}
        alt={project.title}
        className="aspect-[2/1] w-full object-cover"
      />
      <div className="px-3 py-2">
        <h3 className="font-semibold transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </div>
    </Link>
  );
};

export default Card;
