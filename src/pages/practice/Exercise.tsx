import NextBar from "./NextBar"
import { useState } from "react"

type ExerciseProps = {
    exercise: string,
    onFinish: () => {}
}

function Exercise({ exercise, onFinish }: ExerciseProps) {
    const [imageLoading, setImageLoading] = useState<boolean>(true)
  return (
    <div className='w-full flex flex-col items-center justify-between min-h-[calc(100vh-100px)]'>
      <div className="w-full flex flex-col items-center">
         <h1 className='text-3xl font-bold text-neutral-700 text-end mb-8 w-full'>تطبيق</h1>
         <div className={"mb-12 flex justify-center rounded-xl w-full max-w-[650px]"}>
         <div className={`flex justify-center rounded-xl ${imageLoading && `bg-neutral-400 animate-pulse`} w-full max-w-[650px] mb-12`}>
            <img src={exercise} className='w-full rounded-xl' onLoad={() => {setImageLoading(false)}} />
        </div>
         </div>
  </div>
        <NextBar next={onFinish} />
    </div>
  )
}

export default Exercise