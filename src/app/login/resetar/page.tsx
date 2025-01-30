import { Metadata } from "next"

import LoginResetarForm from "@/components/Login/login-resetar-form"

export const metadata: Metadata = {
  title: "Resetar a senha | Dogs",
  description: "Resete a sua senha"
}

type SearchParams = {
  key: string
  login: string
}

type ResetarSearchParams = {
  searchParams: Promise<SearchParams>
}

export default async function ResetPasswordPage({ searchParams }: ResetarSearchParams) {
  const { key, login } = await searchParams

  return (
    <div className="animeLeft">
      <h1 className="title">Resete a Senha</h1>

      <LoginResetarForm keyToken={key} login={login} />
    </div>
  )
}
