import { notFound } from "next/navigation"

import photoGet from "@/actions/photo-get"
import PhotoContent from "@/components/Photo/photo-content/photo-content"

type Params = {
  id: string
}

type FotoIdParams = {
  params: Promise<Params>
}

export async function generateMetadata({ params }: FotoIdParams) {
  const { id } = await params

  const { data } = await photoGet(id)

  if (!data) return { titlte: "Fotos" }
  return {
    title: data.photo.title
  }
}

export default async function FotoIdPage({ params }: FotoIdParams) {
  const { id } = await params

  const { data } = await photoGet(id)

  if (!data) return notFound()

  return (
    <section className="container mainContainer">
      <PhotoContent data={data} single={true} />
    </section>
  )
}
