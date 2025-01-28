import { type_second } from "@/functions/fonts"

import "./globals.css"
import React from "react"
import Header from "@/components/Header/header"

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={`${type_second.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
