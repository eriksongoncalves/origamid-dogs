import { Metadata } from "next"

import ContaPhotoPost from "@/components/Conta/ContaPhotoPost/conta-photo-post"

export const runtime = "edge" // NODE | EDGE

export const metadata: Metadata = {
  title: "Postar | Minha Conta"
}

export default async function PostarPage() {
  return <ContaPhotoPost />
}
