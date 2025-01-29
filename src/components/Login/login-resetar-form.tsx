"use client"

import React, { useActionState } from "react"

import Button from "@/components/Forms/button"
import Input from "@/components/Forms/input"

import passwordReset from "@/actions/password-reset"

import styles from "./login-form.module.css"
import ErrorMessage from "../Helper/error-message"

type LoginResetarFormProps = { login: string; keyToken: string }

export default function LoginResetarForm({ keyToken, login }: LoginResetarFormProps) {
  const [state, action, isPending] = useActionState(passwordReset, {
    ok: false,
    error: "",
    data: null
  })

  return (
    <form action={action} className={styles.form}>
      <Input label="Nova Senha" name="password" type="password" />

      <Input type="hidden" name="login" value={login} />
      <Input type="hidden" name="key" value={keyToken} />

      <ErrorMessage error={state.error} />

      <Button disabled={isPending}>{isPending ? "Resetando..." : "Resetar"}</Button>
    </form>
  )
}
