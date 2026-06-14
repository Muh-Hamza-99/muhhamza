import { Link } from "react-router-dom";
import Section from "./section";
import Email from "./icons/email";
import GitHub from "./icons/github";
import LinkedIn from "./icons/linkedin";

const Hero = () => {
  return (
    <Section>
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="text-lg font-bold tracking-tight md:text-xl"
        >
          Muhammad Hamza
        </Link>
        <div className="flex justify-end gap-3 text-muted-foreground">
          <Link
            target="_blank"
            to="mailto:muhammad.hamzaasad@gmail.com"
            aria-label="Email"
            className="hover:text-primary transition-colors"
          >
            <Email />
          </Link>
          <Link
            target="_blank"
            to="https://github.com/Muh-Hamza-99"
            aria-label="GitHub"
            className="hover:text-primary transition-colors"
          >
            <GitHub />
          </Link>
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/hamzaasad/"
            aria-label="LinkedIn"
            className="hover:text-primary transition-colors"
          >
            <LinkedIn />
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
