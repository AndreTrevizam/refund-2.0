import { createContext, type ReactNode } from "react";

export const AuthContext = createContext({})

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <AuthContext.Provider value={{ name: "andre trevizam" }}>
      {children}
    </AuthContext.Provider>
  )
}