import { Link } from "react-router-dom"
import LeftArrowIcon from "@/assets/icons/leftArrow.svg"

type SectionNavProps = {
    title: string,
    to: string
}

function SectionNav({ title, to }: SectionNavProps) {
  return (
    <div className="border-b-2 mt-3 text-center pb-3 px-2 flex items-center justify-between text-neutral-400">
        <Link to={to}><img className="w-6" src={LeftArrowIcon} /></Link>
        <h2 className="text-xl font-bold">{title}</h2>
        <span></span>
    </div>
  )
}

export default SectionNav