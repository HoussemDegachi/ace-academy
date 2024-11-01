import { Dispatch, SetStateAction } from "react";
import { useToast } from "../ui/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Modal from "../Modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import PasswordInput from "./PasswordInput";
import { Button } from "../ui/button";
import axios, { AxiosResponse } from "axios";
import { useAuth } from "@/contexts/AuthProvider";
import { Link } from "react-router-dom";

type signinProps = {
  openSignin: boolean;
  setOpenSignin: Dispatch<SetStateAction<boolean>>;
};

function Signin({ openSignin, setOpenSignin }: signinProps) {
  const serverBase = import.meta.env.VITE_SERVER_URL;
  const { toast } = useToast();
  const { login } = useAuth();

  const formSchema = z.object({
    email: z.string({ message: "هذا المجال فارغ" })
      .email({ message: "هذا البريد غير صالح" }),
    password: z.string({ message: "هذا المجال فارغ" }).min(8, {
      message: "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function handleSubmit(values: z.infer<typeof formSchema>) {
    setOpenSignin(false);
    toast({
      title: "جار تسجيل الدخول",
    });
    axios
      .post(`${serverBase}/auth/login`, values, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res: AxiosResponse) => res.data)
      .then((data: { token: string }) => {
        login(data.token);
        toast({
          title: "نجاح",
          description: "تم تسجيل الدخول بنجاح",
        });
      })
      .catch((err: any) => {
        console.log(err);
        toast({
          variant: "destructive",
          title: "فشل تسجيل الدخول",
          description: err.response?.data.message,
        });
      });
  }

  return (
    <Modal
      title="تسجيل الدخول"
      description="للمواصلة في أكادمية آيس"
      openModal={openSignin}
      setOpenModal={setOpenSignin}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="p-4">
          <div className="mb-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-light text-[14px] flex justify-end">
                    البريد الإلكتروني
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="البريد" {...field} />
                  </FormControl>
                  <FormMessage className="text-sm" />
                </FormItem>
              )}
            />
          </div>
          <div className="mb-8">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-light text-[14px] flex justify-end">
                    كلمة المرور
                  </FormLabel>
                  <FormControl>
                    <PasswordInput field={field} />
                  </FormControl>
                  <FormMessage className="text-sm" />
                </FormItem>
              )}
            />
            <Link to="/reset" className="text-light text-xs mt-2">نسيت كلمة المرور</Link>
          </div>
          <Button
            type="submit"
            className="bg-indigo-500 w-full hover:bg-indigo-500/90"
          >
            تسجيل الدخول
          </Button>
        </form>
      </Form>
    </Modal>
  );
}

export default Signin;
