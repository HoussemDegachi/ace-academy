import { Progress } from "../ui/progress"
import xMarkIcon from "@/assets/icons/x-mark.svg"


type PracticeNavTypes = {
    progressPercent: number,
    onExit: () => void, 
    infoLabel: string
}

function PracticeNav({progressPercent, onExit, infoLabel}: PracticeNavTypes) {
  return (
    <div className="flex max-w-[1140px] justify-between gap-x-7 mt-7 mb-12 items-center">
        <button onClick={onExit}>
          <img src={xMarkIcon} className="w-4" />
        </button>
        <Progress value={progressPercent} className="[&>*]:bg-sky-400 w-full" />
        <p className="text-neutral-700 font-bold">{infoLabel}</p>
    </div>
  )
}

export default PracticeNav