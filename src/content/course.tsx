type CourseProps = {
  code: string;
  title: string;
  tier: "S" | "A" | "B" | "C" | "D";
};

const tierColors: Record<CourseProps["tier"], string> = {
  S: "bg-green-500",
  A: "bg-blue-500",
  B: "bg-yellow-500",
  C: "bg-orange-500",
  D: "bg-red-500",
};

export function Course({ code, title, tier }: CourseProps) {
  console.log(tierColors[tier]);
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
        <i>{title}</i>
      </div>
      <div
        className={`flex justify-center items-center w-8 h-8 ${tierColors[tier]} text-background p-2 rounded`}
      >
        {tier}
      </div>
    </div>
  );
}
