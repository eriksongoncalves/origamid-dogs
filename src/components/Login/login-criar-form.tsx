"use client"

import React, { useActionState } from "react"

import userPost from "@/actions/user-post"
import Button from "@/components/Forms/button"
import Input from "@/components/Forms/input"

import styles from "./login-form.module.css"
import ErrorMessage from "../Helper/error-message"

export default function LoginCriarForm() {
  const [state, action, isPending] = useActionState(userPost, {
    ok: false,
    error: "",
    data: null
  })

  React.useEffect(() => {
    if (state.ok) window.location.href = "/conta"
  }, [state.ok])

  return (
    <form action={action} className={styles.form}>
      <Input label="Usuário" name="username" type="text" />
      <Input label="Email" name="email" type="email" />
      <Input label="Senha" name="password" type="password" />

      <ErrorMessage error={state.error} />

      <Button disabled={isPending}>{isPending ? "Cadastrando..." : "Cadastrar"}</Button>
    </form>
  )
}
