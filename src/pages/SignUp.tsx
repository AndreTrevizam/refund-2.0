import { Input } from "../components/Input";
import { useState } from "react";
import { Button } from "../components/Button";

export function SignUp() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log(name, email, password, passwordConfirm)
  }

  return (

    <form className="w-full flex flex-col gap-4" onSubmit={onSubmit}>
      <Input required legend="Nome" type="text" placeholder="Seu nome" onChange={(e) => setName(e.target.value)}></Input>

      <Input required legend="E-mail" type="email" placeholder="seu@email.com" onChange={(e) => setEmail(e.target.value)}></Input>

      <Input required legend="Senha" type="password" placeholder="senhasupersegura" onChange={(e) => setPassword(e.target.value)}></Input>

      <Input required legend="Confirme a senha" type="password" placeholder="senhasupersegura" onChange={(e) => setPasswordConfirm(e.target.value)}></Input>

      <Button type="submit" isLoading={isLoading}>Cadastrar</Button>

      <a href="/" className="text-sm text-gray-100 text-center font-semibold mt-10 mb-4 hover:text-green-800 transition ease-linear">Já tenho uma conta</a>
    </form >
  )
}