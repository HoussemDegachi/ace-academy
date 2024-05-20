import { Button } from "./ui/button"


type CtaBtnProps = {
    className?: string,
    text: string,
    onClick?: () => void 
}

function SecBtn({className, text, onClick = () => {}}: CtaBtnProps) {
  return (
    <Button variant={"ghost"} className={`text-base px-6 lg:px-8 py-6 text-slate-500 ${className&&className}`} onClick={onClick}>{text}</Button>
  )
}

export default SecBtn