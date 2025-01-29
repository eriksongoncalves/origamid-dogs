"use server"

import { cookies } from "next/headers"

import { TOKEN_POST } from "@/functions/api"
import apiError from "@/functions/api-error"

const DEFAULT_ERROR_MESSAGE = "Usuário ou senha inválidos"

type LoginState = {
  ok: boolean
  error: string
}

export default async function login(state: LoginState, formData: FormData) {
  try {
    const username = formData.get("username") as string | null
    const password = formData.get("password") as string | null

    if (!username || !password) {
      throw new Error(DEFAULT_ERROR_MESSAGE)
    }

    const { url } = TOKEN_POST()

    const response = await fetch(url, {
      method: "POST",
      body: formData
    })

    if (!response.ok) {
      throw new Error(DEFAULT_ERROR_MESSAGE)
    }

    const data = response.json() as any

    const cookiesStore = await cookies()

    cookiesStore.set("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 // 1 dia
    })

    return {
      ok: true,
      error: ""
    }
  } catch (error: unknown) {
    return apiError(error)
  }
}
