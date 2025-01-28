import React from "react"
import { type_second } from "@/functions/fonts"

import "./globals.css"
import Header from "@/components/Header/header"
import Footer from "@/components/Footer/footer"

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={`${type_second.variable}`}>
        <div className="App">
          <Header />
          <main className="AppBody">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
