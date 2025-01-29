import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Minha Conta"
}

export default async function AccountPage() {
  return (
    <section>
      <div>
        <p style={{ color: "#444", fontSize: "1.25rem", marginBottom: "1rem" }}>
          Nenhuma foto encontrada.
        </p>
        <Link href={"/conta/postar"} className="button" style={{ display: "inline-block" }}>
          Postar Foto
        </Link>
      </div>
    </section>
  )
}
