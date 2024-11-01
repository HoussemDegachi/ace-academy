import HomeLayout from "@/components/layouts/HomeLayout";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InvalidCode from "./InvalidCode";
import PasswordResetForm from "./PasswordResetForm";

function ResetCodeVerification() {
  const { resetCode } = useParams();
  const [isCodeValid, setIsCodeValid] = useState<boolean | null>(null);

  const serverBase = import.meta.env.VITE_SERVER_URL;
  useEffect(() => {
    axios
      .post(`${serverBase}/auth/resetPassword/verifyCode`, void 0, {
        headers: {
          resettoken: resetCode,
        },
      })
      .then(() => {
        setIsCodeValid(true);
      })
      .catch(() => {
        setIsCodeValid(false);
      });
  }, []);

  return (
    <HomeLayout>
      <div className="container max-w-[500px] text-center">
        <h2 className="text-center text-xl text-bold mb-10">
          استعادة كلمة المرور
        </h2>
        {isCodeValid === null ? (
          <p>جار عملية التثبت</p>
        ) : isCodeValid && resetCode ? (
          <PasswordResetForm resetCode={resetCode} />
        ) : (
          <InvalidCode />
        )}
      </div>
    </HomeLayout>
  );
}

export default ResetCodeVerification;
