import React from "react"
import { Metadata } from "next"

import { type_second } from "@/functions/fonts"
import Header from "@/components/Header/header"
import Footer from "@/components/Footer/footer"
import { UserContextProvider } from "@/context/user-context"
import userGet from "@/actions/user-get"

import "./globals.css"

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Rede social para cachorros."
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const { data: user } = await userGet()

  return (
    <html lang="pt-BR">
      <body className={`${type_second.variable}`}>
        <UserContextProvider user={user}>
          <div className="App">
            <Header />
            <main className="AppBody">{children}</main>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>
  )
}
