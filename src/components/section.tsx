interface Section {
  children: React.ReactNode;
  tb?: boolean;
  rb?: boolean;
  bb?: boolean;
  lb?: boolean;
}

const Section = ({ children, tb = false, rb = false, bb = false, lb = false }: Section) => {
  const foldSize = 5;
  return (
    <section className={`h-full bg-border ${tb && "pt-[0.5px]"} ${rb && "pr-[0.5px]"} ${bb && "pb-[0.5px]"} ${lb && "pl-[0.5px]"}`}>
      <div
        className="h-full bg-background flex flex-col justify-items-start px-4 py-3 md:px-6 md:py-4"
        style={{
          clipPath: `polygon(
            ${foldSize}px 0, calc(100% - ${foldSize}px) 0, 
            100% ${foldSize}px, 100% calc(100% - ${foldSize}px), 
            calc(100% - ${foldSize}px) 100%, ${foldSize}px 100%, 
            0 calc(100% - ${foldSize}px), 0 ${foldSize}px
          )`,
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
