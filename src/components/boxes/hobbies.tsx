import Section from "../section";

const Hobbies = () => {
  return (
    <Section rb bb lb>
      <ul className="space-y-2 text-muted-foreground ">
          <li
            className="flex items-center gap-1 text-base"
          >
            <span className="hover:text-foreground hover:cursor-pointer transition-all">Football</span> • <span className="text-muted-foreground hover:text-foreground hover:cursor-pointer transition-all">Cricket</span> • <span className="text-muted-foreground hover:text-foreground hover:cursor-pointer transition-all">Squash</span> • <span className="text-muted-foreground hover:text-foreground hover:cursor-pointer transition-all">Table Tennis</span>
          </li>
      </ul>
    </Section>
  );
};

export default Hobbies;
