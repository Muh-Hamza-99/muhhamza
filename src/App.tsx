import Plus from "./components/plus";
import Section from "./components/section";
import { experiences, projects } from "./lib/data";

const App = () => {
  return (
    <main className="min-h-screen flex items-center bg-background text-foreground font-sans">
      <div className="w-full mx-auto max-w-4xl px-4 md:px-16 lg:px-32 xl:px-48">
        <div className="relative border border-border">
          <Plus className="-top-[5px] -left-[5px]" />
          <Plus className="-top-[5px] -right-[5px]" />
          <Plus className="-bottom-[5px] -left-[5px]" />
          <Plus className="-bottom-[5px] -right-[5px]" />

          <Section>
            <div className="flex items-center gap-5">
              <img
                src="/photo.png"
                alt="Muhammad Hamza"
                width={100}
                height={100}
                className="h-16 w-16 rounded-sm object-cover ring-1 ring-border"
              />
              <div className="space-y-2">
                <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Muhammad Hamza
                </h1>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <a
                    target="_blank"
                    href="mailto:muhammad.hamzaasad@gmail.com"
                    aria-label="Email"
                    className="hover:text-foreground transition-colors"
                  >
                    Email
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/Muh-Hamza-99"
                    aria-label="GitHub"
                    className="hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/hamzaasad/"
                    aria-label="LinkedIn"
                    className="hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </Section>

          <Section borderTop>
            <ul className="space-y-2">
              {experiences.map((experience) => (
                <li
                  key={experience.company}
                  className="flex items-center gap-1 text-base"
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

          <Section borderTop>
            <ul className="space-y-2">
              {projects.map((project) => (
                <li
                  key={project.name}
                  className="flex flex-wrap items-baseline gap-x-2 text-base"
                >
                  <span className="font-medium">{project.name}</span>
                  <span className="text-muted-foreground">
                    {project.description}
                  </span>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </div>
    </main>
  );
};

export default App;
