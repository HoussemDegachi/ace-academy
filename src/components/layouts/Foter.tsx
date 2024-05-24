
function Foter() {
    const year = new Date().getFullYear()
  return (
    <footer className="border-t-2 px-4 py-2">
        <p className="text-[14px] font-light text-neutral-500 m-0 p-0">© Houssem Degachi - {year}</p>
    </footer>
  )
}

export default Foter