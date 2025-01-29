import { Metadata } from "next"

import LoginForm from "@/components/Login/login-form"

export const metadata: Metadata = {
  title: "Login | Dogs",
  description: "Logue na sua conta no site Dogs."
}

export default async function LoginPage() {
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <LoginForm />
    </section>
  )
}
