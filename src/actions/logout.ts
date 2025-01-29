"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function logout() {
  const cookiesStore = await cookies()

  cookiesStore.delete("token")

  redirect("/login")
}
