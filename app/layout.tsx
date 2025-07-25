import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "StaffBox Corp LLC - Under Maintenance | Premium HR Solutions Coming Soon",
  description:
    "StaffBox Corp LLC is a premium HR company specializing in staffing solutions, talent acquisition, and workforce management. We are currently building something great - stay tuned for our enhanced platform.",
  keywords:
    "StaffBox, HR solutions, staffing, talent acquisition, workforce management, human resources, recruitment, premium HR services",
  authors: [{ name: "StaffBox Corp LLC" }],
  creator: "StaffBox Corp LLC",
  publisher: "StaffBox Corp LLC",
  robots: "index, follow",
  alternates: {
    canonical: "https://staffboxcorp.com/",
  },
  openGraph: {
    title: "StaffBox Corp LLC - Premium HR Solutions Coming Soon",
    description:
      "StaffBox Corp LLC is working behind the scenes to bring you a better HR experience. Connect with us for premium staffing and workforce management solutions.",
    url: "https://staffboxcorp.com/",
    siteName: "StaffBox Corp LLC",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "StaffBox Corp LLC - Premium HR Solutions Coming Soon",
    description:
      "StaffBox Corp LLC is working behind the scenes to bring you a better HR experience. Connect with us for premium staffing solutions.",
    creator: "@staffbox_llc",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0F2C23",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
