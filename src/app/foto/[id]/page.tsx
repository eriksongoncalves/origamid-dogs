type PageParams = {
  id: string
}

type PhotoPageProps = {
  params: Promise<PageParams>
}

export default async function PhotoPage({ params }: PhotoPageProps) {
  const { id } = await params

  return <h1 className="title">Foto {id}</h1>
}
