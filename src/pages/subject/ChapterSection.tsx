import { ChapterData } from "@/types/chapter"
import ChapterNode from "./ChapterNode"

type ChapterSectionProp = {
  title: string,
  chapters: ChapterData[]
}

function ChapterSection({title, chapters}: ChapterSectionProp) {
  const step: number = -25
  let current: number = 0
  const offsets: number[] = []
  const middle: number = Math.ceil(chapters.length / 2)
  for (let i = 0; i < chapters.length; i++) {
    offsets.push(step * current)

    if (i < middle) {
      current++
    } else {
      current--
    }
  }
  console.log(offsets)
  return (
    <div>
        <div className="bg-sky-400 text-end rounded-xl py-4 px-6 w-full ">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>
        <div className="py-10 flex gap-10 flex-col items-center w-full">
          {
            chapters.map((chapter, i) => <ChapterNode offset={offsets[i]} to={`/practice/${chapter._id}`} title={chapter.name} />)
          }
        </div>
    </div>
  )
}

export default ChapterSection