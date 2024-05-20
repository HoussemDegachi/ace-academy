
type SkelatonBtnProps = {
    className?: string
}

function SkelatonBtn({className=""}: SkelatonBtnProps) {
  return (
    <div className={`h-12 animate-pulse bg-neutral-400 rounded-lg ${className}`}></div>
  )
}

export default SkelatonBtn