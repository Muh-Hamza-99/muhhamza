import { useState } from "react";
import { terms } from "../../lib/data";
import Section from "../section";
import { useIsMobile } from "../../hooks/use-is-mobile";
import { Link } from "react-router-dom";

const Courses = () => {
  const [isVisible, setIsVisible] = useState(true);
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(terms.length - 1);

  const currentTerm = terms[currentIndex];
  const coursesList = currentTerm?.courses || [];

  const handleSwap = (newIndex: number) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsVisible(true);
    }, 500);
  };

  const next = () => {
    const nextIndex = (currentIndex + 1) % terms.length;
    handleSwap(nextIndex);
  };

  const previous = () => {
    const nextIndex = (currentIndex - 1 + terms.length) % terms.length;
    handleSwap(nextIndex);
  };

  return (
    <Section rb bb lb>
      <div className="flex items-center gap-x-0.5">
        <button
          onClick={previous}
          className="text-xs hover:text-muted-foreground transition-colors"
        >
          ◀
        </button>

        <div
          className={`grid divide-x divide-solid divide-border flex-1 transition-opacity duration-500 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            gridTemplateColumns: `repeat(${coursesList.length}, minmax(0, 1fr))`,
          }}
        >
          {coursesList.map((course) => (
            <Link to={course.link} key={course.code} className="font-medium text-center text-sm md:text-base hover:text-primary transition-colors">
              {isMobile ? course.code.split(" ").map((part, index) => <span key={index} className="block">{part}</span>) : course.code}
            </Link>
          ))}
        </div>

        <button
          onClick={next}
          className="text-xs hover:text-muted-foreground transition-colors"
        >
          ▶
        </button>
      </div>
    </Section>
  );
};

export default Courses;
