"use server"

import { PHOTOS_GET } from "@/functions/api"

export type Photo = {
  id: number
  author: string
  title: string
  date: string
  src: string
  peso: string
  idade: string
  acessos: string
  total_comments: string
}

type PhotosGetProps = {
  page?: number
  total?: number
  user?: string
}

export default async function photosGet({ page = 1, total = 6, user }: PhotosGetProps) {
  const { url } = PHOTOS_GET({ page, total, user })

  const response = await fetch(url, {
    next: {
      revalidate: 10,
      tags: ["photos"]
    }
  })

  const data = (await response.json()) as Photo[]

  return { data, ok: true, error: "" }
}
