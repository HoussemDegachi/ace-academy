import Body from "./Body"
import { useState } from "react"
import Signup from "@/components/auth/Signup"
import Signin from "@/components/auth/Signin"
import HomeLayout from "@/components/layouts/HomeLayout"

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
      <HomeLayout toggleSignup={toggleSignup}>
        <Body toggleSignup={toggleSignup} toggleSignin={toggleSignin} />
        <Signup openSignup={openSignup} setOpenSignup={setOpenSignup} />
        <Signin openSignin={openSignin} setOpenSignin={setOpenSignin} />
      </HomeLayout>

  )
}

export default index