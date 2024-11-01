import PasswordInput from "@/components/auth/PasswordInput";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InvalidCode from "./InvalidCode";
import ValidCode from "./ValidCode";

type PasswordResetFormProps = {
  resetCode: string;
};

function PasswordResetForm({ resetCode }: PasswordResetFormProps) {
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const serverBase = import.meta.env.VITE_SERVER_URL;
  const formSchema = z.object({
    password: z
      .string({ message: "هذا المجال فارغ" })
      .min(8, { message: "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  });

  function handleSubmit(values: z.infer<typeof formSchema>) {
    axios
      .post(`${serverBase}/auth/resetPassword`, values, {
        headers: {
          resettoken: resetCode,
        },
      })
      .then(() => {
        setIsSuccess(true);
      })
      .catch(() => {
        setIsSuccess(false);
      });
  }

  return (
    isSuccess === null ? (<Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col items-center gap-6"
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full flex flex-col gap-1">
              <FormLabel className="text-light text-[14px] flex justify-end">
                قم بإدخال كلمة سر جديدة
              </FormLabel>
              <FormControl>
                <PasswordInput field={field} />
              </FormControl>
              <FormMessage className="text-sm" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-indigo-500 w-full hover:bg-indigo-500/90"
        >
          تأكيد
        </Button>
      </form>
    </Form>) : isSuccess ? <ValidCode /> : <InvalidCode />
  );
}

export default PasswordResetForm;
