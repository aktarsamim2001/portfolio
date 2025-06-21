import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Samim Aktar - Junior Developer",
  description:
    "Award-winning Full Stack Developer with 1.5+ years of experience crafting exceptional digital experiences. Specializing in React, Next.js, and scalable web applications.",
  keywords: ["Junior Developer", "React Expert", "Next.js", "TypeScript", "Web Development", "UI/UX"],
  authors: [{ name: "Samim Aktar" }],
  creator: "Samim Aktar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://samimaktar.dev",
    title: "Samim Aktar - Junior Frontend Developer",
    description:
      "Award-winning Full Stack Developer with 1.5+ years of experience crafting exceptional digital experiences.",
    siteName: "Samim Aktar Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Samim Aktar - Junior Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samim Aktar - Junior Frontend Developer",
    description:
      "Award-winning Full Stack Developer with 1.5+ years of experience crafting exceptional digital experiences.",
    creator: "@samimaktar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-inter antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 transition-all duration-500">
            <Navbar />
            <main className="pt-20">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
