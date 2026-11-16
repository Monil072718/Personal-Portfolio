import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Monil Nakrani - Web Developer",
  description: "Passionate about creating exceptional digital experiences through clean code, innovative solutions, and cutting-edge technologies.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased text-neutral-900 bg-[#FAF8F5] selection:bg-amber-100 selection:text-amber-900 min-h-screen">
        {children}
      </body>
    </html>
  )
}
