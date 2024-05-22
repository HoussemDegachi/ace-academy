import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import UserAvatar from "../UserAvatar"
import { Button } from "../ui/button"
import { useUser } from "@/contexts/UserProvider"
import { useAuth } from "@/contexts/AuthProvider"
import AvatarIcon from "@/assets/icons/avatar.svg"
// import LogoutIcon from "@/assets/icons/logout.svg"

type ProfileProps = {
  className?: string
}

function Profile({className=""}: ProfileProps) {
  const { user } = useUser()
  const { logout } = useAuth()
  const image = AvatarIcon
  return (
    <Popover>
  <PopoverTrigger className={className}>
    <UserAvatar image={image} className="w-10 h-10" />
    </PopoverTrigger>
  <PopoverContent>
    <div className="flex items-center gap-4">
      <UserAvatar image={image} className="w-14 h-14" />
        <div className="">
          <p className="font-bold text-[16px]">{user?.userName}</p>
          <p className=" text-[14px] text-neutral-500">{user?.email}</p>
        </div>
    </div>
    <div className="mt-6">
      <Button variant={"ghost"} className="w-full flex items-center text-red-500 hover:text-red-500 text-[14px]" onClick={logout}>
        {/* <LogoutIcon /> */}
      تسجيل خروج  
      </Button>
    </div>
  </PopoverContent>
</Popover>

  )
}

export default Profile