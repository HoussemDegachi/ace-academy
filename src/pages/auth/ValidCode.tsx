import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function ValidCode() {
  return (
    <div>
      <p className="text-neutral-700 mb-2">تم تغير كلمة السر بنجاح</p>
      <Link to="/">
        <Button className="bg-indigo-500 text-md hover:bg-indigo-500/90">
          الصفحة الرئيسية
        </Button>
      </Link>
    </div>
  );
}

export default ValidCode;
