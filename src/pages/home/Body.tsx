import { useAuth } from "@/contexts/AuthProvider";
import { useUser } from "@/contexts/UserProvider";
import HomeImage from "@/assets/images/educationHome.svg";
import CtaBtn from "@/components/CtaBtn";
import SecBtn from "@/components/SecBtn";
import SkelatonBtn from "@/components/SkelatonBtn";
import CtaLink from "@/components/CtaLink";

type bodyProps = {
  toggleSignup: () => void;
  toggleSignin: () => void;
};

function Body({ toggleSignup, toggleSignin }: bodyProps) {
  const { loadingUser } = useUser();
  const { token } = useAuth();
  return (
    <main className="flex flex-col gap-8 items-center lg:gap-14 lg:flex-row justify-center container">
      <figure className="max-w-[300px] lg:max-w-[450px]">
        <img src={HomeImage} />
      </figure>
      <div className="flex flex-col items-center max-w-[480px]">
        <p className="font-bold text-xl lg:text-3xl text-neutral-600 text-center mb-10">
          ! الطريقة الصحيحة و الفعالة للدراسة و مراجعة الدروس
        </p>
        {!token ? (
          <>
            <CtaBtn
              className="w-full"
              text="هيا لنبدأ"
              onClick={toggleSignup}
            />
            <SecBtn
              text="بالفعل لدي حساب"
              onClick={toggleSignin}
              className="text-sky-500 hover:text-sky-500 w-full mt-4"
            />
          </>
        ) : loadingUser ? (
          <>
            <SkelatonBtn className="w-full mb-4" />
            <SkelatonBtn className="w-full" />
          </>
        ) : (
          <>
            <CtaLink link="subjects" className="w-full" text="هيا لنبدأ" />
          </>
        )}
      </div>
    </main>
  );
}

export default Body;
