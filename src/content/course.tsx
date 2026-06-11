type CourseProps = {
  code: string;
  title: string;
  tier: "S" | "A" | "B" | "C" | "D";
};

export function Course({ code, title, tier }: CourseProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <a
          target="_blank"
          className="block font-semibold"
          href={`https://uwflow.com/course/${code.toLowerCase()}`}
        >
          {code}
        </a>
        <span className="font-light">{title}</span>
      </div>
      <div
        className={`flex justify-center items-center w-8 h-8 border p-2 rounded`}
      >
        {tier}
      </div>
    </div>
  );
}
