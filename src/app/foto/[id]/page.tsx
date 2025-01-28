type PhotoPageProps = {
  params: {
    id: string
  }
}

export default function PhotoPage({ params }: PhotoPageProps) {
  return <h1 className="title">Foto {params.id}</h1>
}
