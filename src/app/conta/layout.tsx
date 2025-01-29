import ContaHeader from "@/components/Conta/ContaHeader/conta-header"

export default async function ContaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <ContaHeader />
      {children}
    </div>
  )
}
