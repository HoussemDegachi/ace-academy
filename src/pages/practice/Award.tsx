import { useUser } from "@/contexts/UserProvider"
import AwardBox from "./AwardBox"
import CtaLink from "@/components/CtaLink"
import CelebrateIcon from "@/assets/icons/celebrate.svg"

type AwardProps = {
    to: string
}

function Award({ to }: AwardProps) {
    const {user} = useUser()
    const lastCourse = user?.history.courses[user.history.courses.length - 1]

  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 min-h-screen">
      <img className="w-10 mb-1" src={CelebrateIcon} />
        <h1 className="font-bold text-3xl text-neutral-700 mb-6 text-center">!ممتاز <br/> لقد اتممت الدرس</h1>
        {
            lastCourse &&
            <div className="flex gap-6 w-full max-w-[500px] justify-between">
            
            <AwardBox title="المدة" value="n/a" />
            <AwardBox title="النقاط" value={lastCourse.xp.toFixed().toString()} />
            <AwardBox title="التمارين" value={lastCourse.exercises.length.toString()} />
        </div>
        }
        <CtaLink link={to} text="متابعة" className="mt-6 w-full max-w-[500px]" />

    </div>
  )
}

export default Award