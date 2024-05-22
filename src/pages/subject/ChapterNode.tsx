import StarIcon from "@/assets/icons/star.svg"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import CtaLink from "@/components/CtaLink"

type ChapterNodeProps = {
  offset: number,
  to: string,
  title: string
}

function ChapterNode({ offset, to, title }: ChapterNodeProps) {
  return (
    <Popover>
        <PopoverTrigger>
    <div style={{transform: `translateX(${offset}px)`}} className={`max-w-[70px] flex items-center justify-center max-h-[70px] p-3 bg-sky-400 rounded-full hover:bg-sky-500/80 border-b-8 border-b-sky-600/60 active:border-b-0`}>
        <img src={StarIcon} />
    </div>
        </PopoverTrigger>
        <PopoverContent>
          <div>
            <p className="font-bold text-neutral-700 text-base mb-6">{title}</p>
            <CtaLink link={to} text="بدأ" className="w-full" />
          </div>
        </PopoverContent>
    </Popover>
  )
}

export default ChapterNode