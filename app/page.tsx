import Block from "../components/block";
import { MAIN } from "../lib/data";

const Root = () => {
  return (
    <div className="flex flex-col space-y-2 mt-2">
      {MAIN.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </div>
  );
};

export default Root;
