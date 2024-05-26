import { useState } from "react"

type CourseProps = {
    video: string,
}

function Course({ video }: CourseProps) {
  const [isVideoLoading, setIsVideoLoading] = useState<boolean>(true)
  return (
<div className={`flex justify-center rounded-xl ${isVideoLoading && `bg-neutral-400 animate-pulse`} aspect-video w-full h-full max-w-[650px] max-h-[365px] mb-12`}>
          <iframe src={video} allowFullScreen className='w-full h-full rounded-xl' onLoad={() => {setIsVideoLoading(false)}} ></iframe>
      </div>
  )
}

export default Course