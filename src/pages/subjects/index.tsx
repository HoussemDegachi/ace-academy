import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthProvider";
import { useUser } from "@/contexts/UserProvider";
import { ClassData } from "@/types/class";
import { SubjectData } from "@/types/subject";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Subject from "./Subject";
import SubjectSkelaton from "./SubjectSkelaton";
import SubjectsGrid from "./SubjectsGrid";

function index() {
  const serverBase = import.meta.env.VITE_SERVER_URL;
  const [subjects, setSubjects] = useState<SubjectData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { token } = useAuth();
  const { user } = useUser();
  const { toast } = useToast();

  useEffect(() => {
    if (!user) return;
    axios
      .get(`${serverBase}/class/${user?.class}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "appliaction/json",
        },
      })
      .then((res: AxiosResponse) => res.data)
      .then((data: { data: ClassData }) => setSubjects(data.data.subjects))
      .catch((err: any) =>
        toast({
          variant: "destructive",
          title: "فشل",
          description: err.response?.data.message || err.message,
        })
      )
      .finally(() => setLoading(false));
  }, [user]);

  return (
    <div className="flex flex-col items-end w-full">
      <h2 className="font-bold text-3xl text-neutral-700">قائمة المواد</h2>
      <div className="mt-6 flex justify-center w-full">
        {loading
          ? <SubjectsGrid>{Array.from(Array(3).keys()).map((_) => <SubjectSkelaton key={_} />)}</SubjectsGrid>
          : subjects ? <SubjectsGrid>{subjects.map((subject) => <Subject key={subject._id} subject={subject} />)}</SubjectsGrid>
          : "Error"
        }
      </div>
    </div>
  );
}

export default index;
