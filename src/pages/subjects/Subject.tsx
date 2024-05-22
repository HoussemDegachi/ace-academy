import { SubjectData } from "@/types/subject"
import { Link } from "react-router-dom"

type SubjectProps = {
    subject: SubjectData
}

function Subject({ subject }: SubjectProps) {
  return (
    <Link to={`/subejcts/${subject._id}`} className="flex flex-col items-center justify-center border-2 border-b-4 active:border-b-2 hover:bg-black/5 rounded-xl p-3 pb-6 min-w-[200px] min-h-[217px]">
        <img src={subject.logo.url} className="w-40 rounded-lg drop-shadow-md object-cover" />
        <h3 className="font-bold text-neutral-700 mt-2">{subject.name}</h3>
    </Link>
  )
}

export default Subject