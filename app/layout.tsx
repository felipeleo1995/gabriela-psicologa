import type React from "react"
import type { Metadata } from "next"
import { Crimson_Text, Inter } from 'next/font/google'
import "./globals.css"

// Fonte principal - Crimson Text (similar à Canela, mas gratuita)
const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
  display: "swap",
})

// Fonte secundária para UI - Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Gabriela Faria Ferreira - Psicóloga | TCC",
  description:
    "Psicóloga Clínica (CRP: 06/154488) especializada em Terapia Cognitivo Comportamental. Atendimento online para adolescentes e adultos. Psicóloga Social.",
  keywords: [
    "psicóloga",
    "terapia cognitivo comportamental",
    "TCC",
    "psicoterapia online",
    "adolescentes",
    "adultos",
    "psicóloga social",
    "Gabriela Faria Ferreira",
    "atendimento online",
  ],
  authors: [{ name: "Gabriela Faria Ferreira" }],
  creator: "Gabriela Faria Ferreira",
  publisher: "Gabriela Faria Ferreira",
  url: "https://gabrielafariaferreira.com",
  openGraph: {
    title: "Gabriela Faria Ferreira - Psicóloga | TCC",
    description:
      "Psicóloga Clínica (CRP: 06/154488) especializada em Terapia Cognitivo Comportamental. Atendimento online para adolescentes e adultos. Psicóloga Social.",
    siteName: "Gabriela Faria Ferreira - Psicóloga",
  },
  twitter: {
    title: "Gabriela Faria Ferreira - Psicóloga | TCC",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
