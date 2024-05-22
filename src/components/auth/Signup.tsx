import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import PasswordInput from "./PasswordInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Modal from "../Modal";
import { ClassData } from "@/types/class";
import axios, { AxiosResponse } from "axios";
import { useToast } from "../ui/use-toast";
import { useAuth } from "@/contexts/AuthProvider";

type signupProps = {
  openSignup: boolean;
  setOpenSignup: Dispatch<SetStateAction<boolean>>;
};

function Signup({ openSignup, setOpenSignup }: signupProps) {
  const serverBase = import.meta.env.VITE_SERVER_URL;

  const [classes, setClasses] = useState<ClassData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { toast } = useToast();
  const { login } = useAuth();

  useEffect(() => {
    axios
      .get(`${serverBase}/class`)
      .then((res: AxiosResponse) => res.data)
      .then((data: { data: ClassData[] }) => setClasses(data.data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const formSchema = z.object({
    userName: z
      .string({
        message: "هذا المجال فارغ",
      })
      .min(2, {
        message: "يجب أن يتكون اسم المستخدم من حرفين أو أكثر.",
      }),
    email: z
      .string({
        message: "هذا المجال فارغ",
      })
      .email({ message: "هذا البريد غير صالح" }),
    password: z
      .string({
        message: "هذا المجال فارغ",
      })
      .min(8, {
        message: "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل",
      }),
    classId: z.string().min(1, {
      message: "هذا المجال فارغ",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      classId: "",
    },
  });

  function handleSubmit(values: z.infer<typeof formSchema>) {
    setOpenSignup(false);
    toast({
      title: "جار إنشاء حسابك",
    });
    axios
      .post(`${serverBase}/auth/signup`, values, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res: AxiosResponse) => res.data)
      .then((data: { token: string }) => {
        login(data.token);
        toast({
          title: "نجاح",
          description: "تم إنشاء حسابك بنجاح",
        });
      })
      .catch((err: any) => {
        console.log(err);
        toast({
          variant: "destructive",
          title: "فشل إنشاء الحساب",
          description: err.response?.data.message,
        });
      });
  }

  return (
    <Modal
      title="إنشاء حساب"
      description="للبدأ في أكادمية آيس"
      openModal={openSignup}
      setOpenModal={setOpenSignup}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="p-4">
          <div className="mb-8">
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem className="mb-6">
                  <FormLabel className="text-light text-[14px] flex justify-end">
                    اسم المستخدم
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="الاسم" {...field} />
                  </FormControl>
                  <FormMessage className="text-sm" />
                </FormItem>
              )}
            />
          </div>
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
          </div>
          <div className="mb-8">
            <FormField
              control={form.control}
              name="classId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-light text-[14px] flex justify-end">
                    اختر قسمك
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="قائمة الأقسام" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {classes
                        ? classes.map((item) => (
                            <SelectItem key={item._id} value={item._id}>
                              {item.name}
                            </SelectItem>
                          ))
                        : !loading && (
                            <SelectItem disabled value={"none"}>
                              غير متوفر حاليا
                            </SelectItem>
                          )}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-sm" />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="bg-indigo-500 w-full hover:bg-indigo-500/90"
          >
            تسجيل
          </Button>
        </form>
      </Form>
    </Modal>
  );
}

export default Signup;
