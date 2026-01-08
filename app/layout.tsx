import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import CursorDot from "@/components/cursor-dot";

const alexandria = Alexandria({ weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  title: "budgie",
  description: "making a flock of software.",
  icons: {
    icon: [
      {
        url: "/budgie.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/budgie.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/budgie.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/budgie.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", alexandria.className)}>
        <CursorDot />
          {children}
      </body>
    </html>
  );
}
