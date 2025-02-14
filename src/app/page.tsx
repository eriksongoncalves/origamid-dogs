import Feed from "@/components/Feed/feed"
import photosGet from "@/actions/photos-get"

export default async function Home() {
  const { data } = await photosGet()

  return (
    <section className="container mainContainer">
      <Feed photos={data || []} />
    </section>
  )
}
