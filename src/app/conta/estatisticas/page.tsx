import { Metadata } from "next"

import statsGet from "@/actions/stats-get"

import dynamic from "next/dynamic"

const ContaEstatisticas = dynamic(
  () => import("@/components/Conta/ContaEstatisticas/conta-estatisticas"),
  {
    loading: () => <p>Carregando...</p>,
    ssr: false
  }
)

export const metadata: Metadata = {
  title: "Estatísticas | Minha Conta"
}

export default async function EstatisticasPage() {
  const { data } = await statsGet()

  if (!data) return null
  return (
    <section>
      <ContaEstatisticas data={data} />
    </section>
  )
}
