import { FlickeringGrid } from "./ui/flickering-grid";

export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-[#e8eded] text-[#141413] flex items-center justify-center">
      <FlickeringGrid className="fixed top-0 right-0 w-full z-0" squareSize={3} gridGap={4} flickerChance={0.3} maxOpacity={0.1} color={"#141413"} />
      <div className="max-w-lg w-full px-6 py-12 z-10">
        {children}
      </div>
    </main>
  );
}
