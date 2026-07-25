import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hamza",
  description: "My Internet Crevice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} h-full antialiased`}
    >
      <main className="min-h-screen flex items-center bg-background text-foreground font-sans">
        <div className="w-full mx-auto max-w-3xl p-4 md:px-8 lg:px-16 xl:px-32">
          <Navbar />
          {children}
        </div>
      </main>
    </html>
  );
}
