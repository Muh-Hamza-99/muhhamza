import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-balance">
            Muhammad Hamza
          </h1>

          <p className="text-xl text-[#5E5D59] mb-4 text-pretty">
            Student. Software. Sports.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#141413] text-[#FAF9F5] transition-all duration-300 hover:bg-[#5E5D59] rounded-full px-4"
            >
              <Link href="https://github.com/Muh-Hamza-99">GitHub</Link>
            </Button>
            <Button
              asChild
              className="bg-[#141413] text-[#FAF9F5] transition-all duration-300 hover:bg-[#5E5D59] rounded-full px-4"
            >
              <Link href="https://www.linkedin.com/in/hamzaasad/">
                LinkedIn
              </Link>
            </Button>
            <Button
              asChild
              className="bg-[#141413] text-[#FAF9F5] transition-all duration-300 hover:bg-[#5E5D59] rounded-full px-4"
            >
              <Link href="https://muhhamza.substack.com/">
                Substack
              </Link>
            </Button>
          </div>
        </div>
    )
}