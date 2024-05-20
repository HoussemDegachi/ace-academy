import { Button } from './ui/button'

type CtaBtnProps = {
    className?: string,
    text: string,
    onClick?: () => void
}

function CtaBtn({className, text, onClick=()=> {}}: CtaBtnProps) {
  return (
    <Button variant={"default"} onClick={onClick} className={`text-xl bg-indigo-500 hover:bg-indigo-500/90 border-b-4 border-indigo-600 active:border-b-0 px-8 h-12 ${className&&className}`} >{text}</Button>
  )
}

export default CtaBtn