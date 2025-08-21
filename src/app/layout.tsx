import type { Metadata } from "next"
import { Lexend } from "next/font/google"

import Contact from "@/components/contact"
import { ThemeProvider } from "@/components/theme-provider"
import { CONFIG } from "@/config"
import { cn } from "@/lib/utils"

import "./globals.css"

const font = Lexend({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
})

export const metadata: Metadata = {
    metadataBase: new URL(CONFIG.siteUrl),
    title: {
        default: CONFIG.name,
        template: `${CONFIG.name} | %s`,
    },
    description: CONFIG.descriptionRaw,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <html lang="en" suppressHydrationWarning>
                <head></head>
                <body
                    className="min-h-screen bg-background from-[#43434330] via-[#32323230] via-25% font-sans antialiased dark:bg-gradient-to-b lowercase"
                >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <main className={cn("mx-auto max-w-2xl py-4 md:pt-10", font.className)}>
                            {children}
                            <Contact />
                        </main>
                    </ThemeProvider>
                </body>
            </html>
        </>
    )
}
