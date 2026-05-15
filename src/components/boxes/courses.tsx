import { courses } from "../../lib/data";
import Section from "../section";

const Courses = () => {
  return (
    <Section rb bb lb>
      <ul className="space-y-2">
        {courses.map((course) => (
          <li
            key={course.code}
            className="flex flex-wrap items-baseline gap-x-2 text-base hover:cursor-pointer hover:translate-x-1 transition-all"
          >
            <span className="font-medium">{course.code}</span>
            <span className="text-muted-foreground">{course.name}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Courses;
