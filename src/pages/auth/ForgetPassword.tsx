import HomeLayout from "@/components/layouts/HomeLayout";
import SecBtn from "@/components/SecBtn";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

function ForgetPassword() {
  const { toast } = useToast();
  const [isFormVisible, setIsFormVisible] = useState<boolean>(true);

  const serverBase = import.meta.env.VITE_SERVER_URL;
  const formSchema = z.object({
    email: z
      .string({ message: "هذا المجال فارغ" })
      .email({ message: "هذا البريد غير صالح" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function handleSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    axios
      .post(`${serverBase}/auth/resetPassword/getCode`, values, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        if (!isFormVisible) {
          toast({
            title: "نجاح",
            description: "تم إرسال رابط إستعادة رمز العبور عبر الإيميل"
          })
        }
        setIsFormVisible(false);
      })
      .catch((err: any) => {
        toast({
          variant: "destructive",
          title: "فشل إرسال الرابط",
          description: err.response?.data.message,
        });
      });
  }

  return (
    <HomeLayout>
      <div className="container max-w-[500px]">
        <h2 className="text-center text-xl text-bold mb-10">
          استعادة كلمة المرور
        </h2>
        {isFormVisible ? (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="flex flex-col items-center gap-6"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full flex flex-col items-center gap-1">
                    <FormControl>
                      <Input
                        placeholder="قم بإدخال الإيميل"
                        className="w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="bg-indigo-500 w-full hover:bg-indigo-500/90"
              >
                إرسال
              </Button>
            </form>
          </Form>
        ) : (
          <p className="flex flex-col justify-center">
            <p className="text-center text-neutral-700 mb-2">تم إرسال رابط إستعادة رمز العبور عبر الإيميل</p>
            <SecBtn text="أرسل مجددا" className="text-sm hover:bg-transparent hover:text-red-400 p-0 text-red-500" onClick={() => setIsFormVisible(true)}/>
          </p>
        )}
      </div>
    </HomeLayout>
  );
}

export default ForgetPassword;
