import Block from "../../components/block";
import { TERMS } from "../../lib/data/misc";

const UWaterloo = () => {
  return (
    <div className="flex flex-col space-y-2 mt-2">
      {TERMS.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </div>
  );
};

export default UWaterloo;
