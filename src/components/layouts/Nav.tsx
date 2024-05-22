import BarsIcon from "@/assets/icons/bars.svg"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import MenuBar from "./MenuBar"

function Nav() {
  return (
    <header className='w-full h-[50px] bg-sky-500 fixed top-0 flex items-center px-6 z-50'>
        <Sheet>
            <SheetTrigger>
                <button>
                <img src={BarsIcon} className="w-5" />
                </button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col items-end">
                <MenuBar />
            </SheetContent>
        </Sheet>
    </header>
  )
}

export default Nav