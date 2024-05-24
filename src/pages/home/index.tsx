import HomeNav from "@/components/layouts/HomeNav"
import Body from "./Body"
import { useState } from "react"
import Signup from "@/components/auth/Signup"
import Signin from "@/components/auth/Signin"
import Foter from "@/components/layouts/Foter"

function index() {
  const [openSignup, setOpenSignup] = useState<boolean>(false)
  const [openSignin, setOpenSignin] = useState<boolean>(false)
  const toggleSignup = () => {
    setOpenSignup(!openSignup)
  }
  const toggleSignin = () => {
    setOpenSignin(!openSignin)
  }
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <HomeNav toggleSignup={toggleSignup} />
        <Body toggleSignup={toggleSignup} toggleSignin={toggleSignin} />
        <Signup openSignup={openSignup} setOpenSignup={setOpenSignup} />
        <Signin openSignin={openSignin} setOpenSignin={setOpenSignin} />
      </div>
        <Foter />
    </div>
  )
}

export default index