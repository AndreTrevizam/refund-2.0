import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { useState } from "react"
import searchSvg from "../assets/search.svg"

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
    </div>
  )
}