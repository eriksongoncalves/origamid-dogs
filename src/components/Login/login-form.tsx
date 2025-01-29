"use client"

import React, { useActionState, useEffect } from "react"
import Link from "next/link"

import login from "@/actions/login"

import styles from "./login-form.module.css"
import Input from "../Forms/input"
import Button from "../Forms/button"
import ErrorMessage from "../Helper/error-message"

export default function LoginForm() {
  const [state, action, isPending] = useActionState(login, {
    ok: false,
    error: "",
    data: null
  })

  useEffect(() => {
    if (state.ok) {
      window.location.href = "/conta"
    }
  }, [state.ok])

  return (
    <>
      <form action={action} className={styles.form}>
        <Input label="Usuário" name="username" type="text" />
        <Input label="Senha" name="password" type="password" />

        <ErrorMessage error={state.error} />

        <Button disabled={isPending}>{isPending ? "Enviando..." : "Entrar"}</Button>
      </form>

      <Link className={styles.perdeu} href="/login/perdeu">
        Perdeu a senha?
      </Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>

        <Link className="button" href="/login/criar">
          Cadastro
        </Link>
      </div>
    </>
  )
}
