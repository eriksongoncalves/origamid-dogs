"use client"

import React, { useActionState } from "react"

import Button from "@/components/Forms/button"
import Input from "@/components/Forms/input"
import photoPost from "@/actions/photo-post"

import styles from "./conta-photo-post.module.css"
import ErrorMessage from "../../Helper/error-message"

export default function ContaPhotoPost() {
  const [state, action, isPending] = useActionState(photoPost, {
    ok: false,
    error: "",
    data: null
  })

  const [img, setImg] = React.useState("")
  function handleImgChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (target.files) {
      setImg(URL.createObjectURL(target.files[0]))
    }
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form action={action}>
        <Input label="Nome" name="nome" type="text" />
        <Input label="Peso" name="peso" type="number" />
        <Input label="Idade" name="idade" type="number" />

        <input onChange={handleImgChange} type="file" name="img" id="img" className={styles.file} />

        <ErrorMessage error={state.error} />

        <Button disabled={isPending}>{isPending ? "Enviando..." : "Enviar"}</Button>
      </form>

      <div>
        <div className={styles.preview} style={{ backgroundImage: `url(${img})` }}></div>
      </div>
    </section>
  )
}
