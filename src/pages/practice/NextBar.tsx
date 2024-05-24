import CtaBtn from '@/components/CtaBtn'
import { useState } from 'react'

type NextBarProps = {
  next: () => void
}

function NextBar({next}: NextBarProps) {
  const [checked, setChecked] = useState<boolean>(false)
  return (
    <div className={`border-t-2 w-full py-6 px-4 flex justify-between ${checked && "bg-green-300"} items-center`}>
      <p className="text-green-600 font-bold text-xl">
        {
          checked && "ممتاز"
        }
      </p>
      {
        !checked ? <CtaBtn onClick={() => setChecked(true)} text="إتمام" variant='success' /> : <CtaBtn onClick={next} text="التالي" variant='success' />
      }
    </div>
  )
}

export default NextBar