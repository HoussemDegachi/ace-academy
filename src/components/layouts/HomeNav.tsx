import { useUser } from "@/contexts/UserProvider";
import NamedLogo from "../NamedLogo";
import SecBtn from "../SecBtn";
import { useAuth } from "@/contexts/AuthProvider";
import SkelatonBtn from "../SkelatonBtn";
import Profile from "../auth/Profile";

type homeNavProps = {
  toggleSignup: () => void;
};

function HomeNav({ toggleSignup }: homeNavProps) {
  const { loadingUser } = useUser();
  const { token } = useAuth();
  return (
    <header className="py-4 px-6 lg:px-32 flex justify-between items-center border-b-2">
      {!token ? (
        <SecBtn onClick={toggleSignup} text="تسجيل الدخول" />
      ) : loadingUser ? (
        <SkelatonBtn className="w-full max-w-20 max-h-10" />
      ) : (
        <Profile />
      )}
      <NamedLogo />
    </header>
  );
}

export default HomeNav;
