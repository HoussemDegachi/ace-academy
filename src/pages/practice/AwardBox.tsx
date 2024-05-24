type AwardBoxProps = {
    title: string,
    value: string
}

function AwardBox({title, value}: AwardBoxProps) {
  return (
    <div className="border-2 border-cyan-500 bg-cyan-500 rounded-xl w-full max-w-[125px] h-full max-h-[125px] overflow-hidden">
    <p className="font-bold text-[14px] text-white  text-center py-1">{title}</p>
    <p className="px-1 py-5 text-center font-bold text-xl bg-white text-cyan-500 rounded-t-xl">{value}</p>
</div>
  )
}

export default AwardBox