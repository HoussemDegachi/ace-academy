import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function InvalidCode() {
  return (
    <div>
    <p className="text-neutral-700 mb-2">
      هذا الرابط غير صالح لإستعادة كلمة العبور
    </p>
    <Link to="/reset">
      <Button className="bg-indigo-500 text-md hover:bg-indigo-500/90">
        حاول مجددا
      </Button>
    </Link>
  </div>
  )
}

export default InvalidCode