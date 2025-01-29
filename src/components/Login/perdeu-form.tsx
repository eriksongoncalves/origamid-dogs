"use client"

import React, { useActionState, useMemo } from "react"

import passwordLost from "@/actions/password-lost"
import Button from "@/components/Forms/button"
import Input from "@/components/Forms/input"

import styles from "./login-form.module.css"
import ErrorMessage from "../Helper/error-message"
import { isClient } from "@/functions/is-client"

export default function LoginPerdeuForm() {
  const [state, action, isPending] = useActionState(passwordLost, {
    ok: false,
    error: "",
    data: null
  })

  const url = useMemo(() => {
    return isClient() ? window.location.href : ""
  }, [])

  console.log(">>> url", url)

  return (
    <form action={action} className={styles.form}>
      <Input label="E-mail / Usuário" name="login" type="text" />
      <Input name="url" type="hidden" value={url} />

      <ErrorMessage error={state.error} />

      {state.ok ? (
        <p style={{ color: "#4c1" }}>E-mail enviado com sucesso.</p>
      ) : (
        <Button disabled={isPending}>{isPending ? "Cadastrando..." : "Enviar E-mail"}</Button>
      )}
    </form>
  )
}
