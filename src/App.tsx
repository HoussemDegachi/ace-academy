import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import "./css/output.css"
import Home from "@/pages/home/index"
import { useEffect } from "react";
import { useAuth } from "./assets/contexts/AuthProvider";
import { useUser } from "./assets/contexts/UserProvider";
import axios, { AxiosError, AxiosResponse } from "axios";
import { User } from "./types/user";
import { Toaster } from "./components/ui/toaster";

function App() {
  const serverBase = import.meta.env.VITE_SERVER_URL;
  const { token, logout } = useAuth()
  const { setUser, setLoadingUser } = useUser()

  useEffect(() => {
    if (!token) {
      setUser(null)
      setLoadingUser(false)
      return
    }

    axios.get(`${serverBase}/user`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }).then((res: AxiosResponse) => res.data)
    .then((data: {data: User}) => setUser(data.data))
    .catch((res: AxiosError) => {
      console.log(res.response?.status)
      if (res.response?.status == 401) logout()
    })
    .finally(() => setLoadingUser(false))
  }, [])

  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
  )
}

export default App