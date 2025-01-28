type UserPageProps = {
  params: {
    user: string
  }
}

export default function UserPage({ params }: UserPageProps) {
  return <h1 className="title">User {params.user}</h1>
}
