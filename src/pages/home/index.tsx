import HomeNav from "@/components/layouts/HomeNav"
import Body from "./Body"
import { useState } from "react"
import Signup from "@/components/auth/Signup"

function index() {
  const [openSignup, setOpenSignup] = useState<boolean>(false)
  const toggleSignup = () => {
    setOpenSignup(!openSignup)
  }
  return (
    <>
        <HomeNav toggleSignup={toggleSignup} />
        <Body toggleSignup={toggleSignup} />
        <Signup openSignup={openSignup} setOpenSignup={setOpenSignup} />
    </>
  )
}

export default index