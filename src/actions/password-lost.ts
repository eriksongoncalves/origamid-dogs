"use server"

import { PASSWORD_LOST } from "@/functions/api"
import apiError from "@/functions/api-error"

const DEFAULT_ERROR_MESSAGE = "E-mail ou usuário inválidos"

type PasswordLostState = {
  ok: boolean
  error: string
}

export default async function passwordLost(state: PasswordLostState, formData: FormData) {
  try {
    const login = formData.get("login") as string | null
    const urlPerdeu = formData.get("url") as string | null

    if (!login) {
      throw new Error(DEFAULT_ERROR_MESSAGE)
    }

    const { url } = PASSWORD_LOST()

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ login, url: urlPerdeu })
    })

    if (!response.ok) {
      throw new Error(DEFAULT_ERROR_MESSAGE)
    }

    return {
      ok: true,
      error: ""
    }
  } catch (error: unknown) {
    return apiError(error)
  }
}
