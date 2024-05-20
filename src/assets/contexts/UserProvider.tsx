import { User } from "@/types/user"
import React, { Dispatch, SetStateAction, createContext, useContext, useState } from "react"

type UserProviderProps = {
    children: React.ReactNode
}

type AuthContextTypes = {
  user: User|null,
  setUser: Dispatch<SetStateAction<User|null>>,
  loadingUser: boolean,
  setLoadingUser: Dispatch<SetStateAction<boolean>>
}

const initialContext = {
  user: null,
  setUser: () => {},
  loadingUser: true,
  setLoadingUser: () => {}
}

const UserContext = createContext<AuthContextTypes>(initialContext)
export const useUser = () => useContext(UserContext)

export function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<User|null>(null)
    const [loadingUser, setLoadingUser] = useState<boolean>(true)

  return (
    <UserContext.Provider value={{user, setUser, loadingUser, setLoadingUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext