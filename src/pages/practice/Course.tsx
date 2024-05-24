import { useState } from "react"
import NextBar from "./NextBar"

type CourseProps = {
    video: string,
    onFinish: () => void
}

function Course({ video, onFinish }: CourseProps) {
  const [isVideoLoading, setIsVideoLoading] = useState<boolean>(true)
  return (
    <div className='w-full flex flex-col items-center justify-between min-h-[calc(100vh-100px)]'>
      <div className="w-full flex flex-col items-center">
        <h1 className='text-3xl font-bold text-neutral-700 text-end mb-8 w-full'>الدرس</h1>
        <div className={`flex justify-center rounded-xl ${isVideoLoading && `bg-neutral-400 animate-pulse`} aspect-video w-full h-full max-w-[650px] max-h-[365px] mb-12`}>
            <iframe src={video} allowFullScreen className='w-full h-full rounded-xl' onLoad={() => {setIsVideoLoading(false)}} ></iframe>
        </div>
      </div>
        <NextBar next={onFinish} />
    </div>
  )
}

export default Course