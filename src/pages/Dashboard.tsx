import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { useState } from "react"
import { RefundItem } from "../components/RefundItem"
import searchSvg from "../assets/search.svg"
import { CATEGORIES } from "../utils/categories"

const REFUND_EXAMPLE = {
  id: "123",
  username: "André",
  category: "Transporte",
  amount: "20,30",
  categoryImg: CATEGORIES["transport"].icon 
}

export function Dashboard() {

  const [name, setName] = useState("")

  function fetchRefunds(e: React.FormEvent) {
    e.preventDefault()
    console.log(name)
  }

  return (
    <div className="w-full bg-gray-500 flex flex-col md:min-w-[768px] p-10 rounded-2xl">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Dashboard</h1>

      <form onSubmit={fetchRefunds} className="flex items-center justify-between pb-6 border-b-[1px] border-b-gray-400 md:flex-row gap-2 mt-6">
        <Input
          placeholder="Pesquisar pelo nome"
          onChange={(e) => setName(e.target.value)}
        />

        <Button type="submit" variant="icon">
          <img src={searchSvg} alt="Ícone de pesquisar" className="w-5" />
        </Button>
      </form>

      <div className="mt-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">
        <RefundItem data={REFUND_EXAMPLE}/>
        <RefundItem data={REFUND_EXAMPLE}/>
        <RefundItem data={REFUND_EXAMPLE}/>
        <RefundItem data={REFUND_EXAMPLE}/>
        <RefundItem data={REFUND_EXAMPLE}/>
        <RefundItem data={REFUND_EXAMPLE}/>
        <RefundItem data={REFUND_EXAMPLE}/>
        <RefundItem data={REFUND_EXAMPLE}/>
        <RefundItem data={REFUND_EXAMPLE}/>
        <RefundItem data={REFUND_EXAMPLE}/>
      </div>
    </div>
  )
}