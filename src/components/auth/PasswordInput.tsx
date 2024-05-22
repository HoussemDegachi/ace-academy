import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { ControllerRenderProps } from "react-hook-form";

type PasswordInputProps = {
  field:
    | ControllerRenderProps<
        {
          userName: string;
          email: string;
          password: string;
          classId: string;
        },
        "password"
      >
    | ControllerRenderProps<
        {
          email: string;
          password: string;
        },
        "password"
      >;
};

function PasswordInput({ field }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        className="hide-password-toggle pr-10"
        {...field}
      />
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? (
          <EyeIcon className="h-4 w-4" aria-hidden="true" />
        ) : (
          <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
        )}
        <span className="sr-only">
          {showPassword ? "Hide password" : "Show password"}
        </span>
      </Button>
    </div>
  );
}

export default PasswordInput;
