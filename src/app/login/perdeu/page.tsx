import { Metadata } from "next"

import LoginPerdeuForm from "@/components/Login/perdeu-form"

export const metadata: Metadata = {
  title: "Perdeu a senha | Dogs",
  description: "Perdeu a senha? Recupere agora!"
}

// export const dynamic = "force-dynamic"

export default function ForgotPasswordPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>

      <LoginPerdeuForm />
    </div>
  )
}
