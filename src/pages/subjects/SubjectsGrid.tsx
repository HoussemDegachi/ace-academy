import { ReactNode } from "react"

type SubjectGridProps = {
    children: ReactNode
}

function SubjectsGrid({children}: SubjectGridProps) {
  return (
    <div className="w-full grid xs:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">{children}</div>
  )
}

export default SubjectsGrid