import NamedLogo from '../NamedLogo'
import Profile from '../auth/Profile'
import HomeLogo from "@/assets/icons/home.svg"

type MenuBarProps = {
  className?: string
}

function MenuBar({ className="" }: MenuBarProps) {
  return (
    <div className={`relative w-full h-full flex flex-col items-end ${className}`}>
        <div className="w-max">
            <NamedLogo />
        </div>
        <div className="mt-8 flex flex-col gap-3 w-full">
            <div className="flex items-center justify-end gap-4 px-4 py-2 text-sky-500 bg-sky-500/15 hover:bg-sky-500/20 text-base font-bold border-2 border-sky-300 w-full rounded-xl">
            تعلّم <img src={HomeLogo} alt="تعلّم" />
            </div>
        </div>
        <Profile className='absolute left-6 bottom-6' />
    </div>
  )
}

export default MenuBar