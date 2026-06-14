interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return (
    <section
      className="relative h-full bg-background flex flex-col justify-items-start px-4 py-2"
    >
      {children}
    </section>
  );
};

export default Section;
