import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { useState } from "react"

export function SignIn() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input required legend="E-mail" type="email" placeholder="seu@email.com" onChange={(e) => setEmail(e.target.value)}></Input>

      <Input required legend="Senha" type="password" placeholder="senhasupersegura" onChange={(e) => setPassword(e.target.value)}></Input>

      <Button type="submit" isLoading={isLoading}>Entrar</Button>

      <a href="/signup" className="text-sm text-gray-100 text-center font-semibold mt-10 mb-4 hover:text-green-800 transition ease-linear">Criar conta</a>
    </form>
  )
}