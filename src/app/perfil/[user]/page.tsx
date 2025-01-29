type PageParams = {
  user: string
}

type UserPageProps = {
  params: Promise<PageParams>
}

export default async function UserPage({ params }: UserPageProps) {
  const { user } = await params

  return <h1 className="title">User {user}</h1>
}
