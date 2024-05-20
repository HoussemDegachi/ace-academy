import logo from "@/assets/images/logo.svg"

function NamedLogo() {
  return (
    <div className="flex items-center">
        <h1 className="mx-4 font-bold text-sky-500 text-2xl">أكادمية آيس</h1>
        <figure>
            <img className="w-12" src={logo} alt="Ace academy" />
        </figure>
    </div>
  )
}

export default NamedLogo