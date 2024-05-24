import SectionNav from "@/components/SectionNav";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthProvider";
import { ChapterData } from "@/types/chapter";
import { SubjectData } from "@/types/subject";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChapterSection from "./ChapterSection";
import LoadingSpinnerIcon from "@/assets/icons/loadingSpinner.svg"


function index() {
  const baseUrl = import.meta.env.VITE_SERVER_URL;
  const { subjectId } = useParams();
  const { toast } = useToast();
  const { token } = useAuth()

  const [subject, setSubject] = useState<null | SubjectData>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const trimesters: ChapterData[][] = []
  if (subject) {
    for (let i = 0; i < 3; i++) {
      const trimesterArr = subject.chapters.filter((chapter) => chapter.trimester === i+1).sort((a, b) => a.order - b.order)
      trimesters.push(trimesterArr)
    }
  }

  useEffect(() => {
    axios
      .get(`${baseUrl}/subject/${subjectId}`, {
        headers: {
          "Content-Type": "appliaction/json",
          "Authorization": `Bearer ${token}`
        }
      })
      .then((res: AxiosResponse) => res.data)
      .then((data: { data: SubjectData }) => setSubject(data.data))
      .catch((err: any) =>
        toast({
          variant: "destructive",
          title: "فشل",
          description: err.response?.data.message || err.message,
        })
      )
      .finally(() => setLoading(false));
  }, []);

  return (
    loading ? <div className="w-full flex items-center justify-center min-h-screen"><img src={LoadingSpinnerIcon} className={"w-10"} /> </div>: subject ? (
      <>
        <SectionNav title={subject.name} to="/subjects" />
        <div className="py-6">
        {
          trimesters.map((trimester, i) =>
            <ChapterSection chapters={trimester} title={`الثلاثي ${i+1}`} />
        )
      }
      </div>
      </>
    ) : "error"
  );
}

export default index;
