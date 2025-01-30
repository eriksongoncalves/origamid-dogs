"use client"

import React, { useActionState } from "react"

import EnviarIcon from "@/icons/enviar-icon"
import { Comment } from "@/actions/photo-get"
import commentPost from "@/actions/comment-post"

import styles from "./photo-comments-form.module.css"
import ErrorMessage from "../../Helper/error-message"

export default function PhotoCommentsForm({
  single,
  id,
  setComments
}: {
  single: boolean
  id: number
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>
}) {
  const [state, action, isPending] = useActionState(commentPost, {
    ok: false,
    data: null,
    error: ""
  })

  React.useEffect(() => {
    if (state.ok && state.data) {
      setComments(comments => [...comments, state.data])
      setComment("")
    }
  }, [state, setComments])

  const [comment, setComment] = React.useState("")

  return (
    <form action={action} className={`${styles.form} ${single ? styles.single : ""}`}>
      <input type="hidden" name="id" id="id" value={id} />
      <textarea
        className={styles.textarea}
        name="comment"
        id="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />

      <button type="submit" className={styles.button} disabled={isPending}>
        <EnviarIcon />
      </button>

      <ErrorMessage error={state.error} />
    </form>
  )
}
