import Link from "next/link";
import Section from "./section";
import Email from "./icons/email";
import GitHub from "./icons/github";
import LinkedIn from "./icons/linkedin";

const Navbar = () => {
  return (
    <Section>
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight md:text-xl"
        >
          Muhammad Hamza
        </Link>
        <div className="flex justify-end gap-3 text-muted-foreground">
          <Link
            target="_blank"
            href="mailto:muhammad.hamzaasad@gmail.com"
            aria-label="Email"
            className="hover:text-primary transition-colors"
          >
            <Email />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/Muh-Hamza-99"
            aria-label="GitHub"
            className="hover:text-primary transition-colors"
          >
            <GitHub />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/hamzaasad/"
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

export default Navbar;
