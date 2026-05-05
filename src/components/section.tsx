import Plus from './plus';

const Section = ({
  children,
  borderTop = false,
}: {
  children: React.ReactNode;
  borderTop?: boolean;
}) => {
  return (
    <section className={`relative px-4 py-5 md:px-6 md:py-6 ${borderTop ? "border-t border-border" : ""}`}>
      {borderTop && (
        <>
          <Plus className="-top-[5px] -left-[5px]" />
          <Plus className="-top-[5px] -right-[5px]" />
        </>
      )}
      {children}
    </section>
  );
};

export default Section;
