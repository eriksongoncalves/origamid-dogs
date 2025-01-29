"use server"

import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import { PHOTO_POST } from "@/functions/api"
import apiError from "@/functions/api-error"

type PhotoPostState = {
  ok: boolean
  error: string
}

export default async function photoPost(state: PhotoPostState, formData: FormData) {
  const cookiesStore = await cookies()

  const token = cookiesStore.get("token")?.value

  const nome = formData.get("nome") as string | null
  const idade = formData.get("idade") as string | null
  const peso = formData.get("peso") as string | null
  const img = formData.get("img") as File

  try {
    if (!token || !nome || !idade || !peso || img.size === 0) throw new Error("Preencha os dados.")

    const { url } = PHOTO_POST()

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token
      },
      body: formData
    })

    if (!response.ok) throw new Error("Email ou usuário já cadastrado.")
  } catch (error: unknown) {
    return apiError(error)
  }

  revalidateTag("photos")
  redirect("/conta")
}
