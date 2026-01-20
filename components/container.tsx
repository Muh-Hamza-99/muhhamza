export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-[#e8eded] text-[#141413] flex items-center justify-center p-6">
      <div className="max-w-lg w-full py-12">{children}</div>
    </main>
  );
}
