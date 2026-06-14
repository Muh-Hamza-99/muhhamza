import Hero from "../components/hero";
import Block from "../components/block";
import { blocks } from "../lib/data";

const Home = () => {
  return (
    <main className="min-h-screen flex items-center bg-background text-foreground font-sans">
      <div className="w-full mx-auto max-w-3xl p-4 md:px-8 lg:px-16 xl:px-32">
        <Hero />
        <div className="flex flex-col space-y-2 mt-2">
          {blocks.map((block, index) => (
            <Block key={index} block={block} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
