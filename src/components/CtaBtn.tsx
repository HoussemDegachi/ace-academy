import { Button } from './ui/button'

type CtaBtnProps = {
    className?: string,
    text: string,
    onClick?: () => void,
    variant?: "normal" | "success",
}

function CtaBtn({className, text, onClick=()=> {}, variant="normal"}: CtaBtnProps) {
  return (
    <Button variant={"default"} onClick={onClick} className={`text-xl ${variant == "normal" ? "bg-indigo-500" : "bg-green-500"} ${variant == "normal" ? "hover:bg-indigo-500/90" : "hover:bg-green-500/90"} border-b-4 ${variant == "normal" ? "border-indigo-600" : "border-green-600"} active:border-b-0 px-8 h-12 ${className&&className}`} >{text}</Button>
  )
}

export default CtaBtn