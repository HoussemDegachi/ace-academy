import PracticeNav from "@/components/layouts/PracticeNav";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthProvider";
import { ChapterData } from "@/types/chapter";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import LoadingSpinnerIcon from "@/assets/icons/loadingSpinner.svg"
import { ExerciseData } from "@/types/exercise";
import Exercise from "./Exercise";
import ExitModal from "./ExitModal";
import { UserData } from "@/types/user";
import { useUser } from "@/contexts/UserProvider";
import Award from "./Award";
import Courses from "./Courses";

type HistoryData = {
  chapterId: string,
  exercises: string[],
  duration: number,
  actualDuration: number
}

function index() {
  const BaseUrl = import.meta.env.VITE_SERVER_URL;
  const [isCourse, setIsCourse] = useState<boolean>(true);
  const [courseData, setCourseData] = useState<ChapterData | null>(null);
  const [exercise, setExercise] = useState<ExerciseData|null>(null)
  const [loading, setLoading] = useState<boolean>(true);
  const [history, setHistory] = useState<HistoryData|null>(null)
  const [percent, setPercent] = useState<number>(0)
  const [numberCompleted, setNumberCompleted] = useState<number>(0)
  const [openExitModal, setOpenExitModal] = useState<boolean>(false)
  const [isAward, setIsAward] = useState<boolean>(false)
  const target = 4
  const { chapterId } = useParams();
  const { setUser } = useUser()
  const { token } = useAuth();
  const { toast } = useToast();

  if (!token) {
    return <Navigate to="/" />
  }

  useEffect(() => {
    const newPercent = numberCompleted / target * 100
    if (newPercent <= 100) setPercent(newPercent) 

  }, [numberCompleted])
  
  if (chapterId && !history) {
     setHistory({
      chapterId,
      exercises: [
        
    ],
    duration: 2700,
    actualDuration: 2700,
  })
}


  useEffect(() => {
    axios
      .get(`${BaseUrl}/chapter/${chapterId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res: AxiosResponse) => res.data)
      .then((data: { data: ChapterData }) => setCourseData(data.data))
      .catch((err: any) =>
        toast({
          variant: "destructive",
          title: "فشل",
          description: err.response?.data.message || err.message,
        })
      ).finally(() => {
        setLoading(false)
      })
  }, []);

  const updateExerciseData = async () => {
    setLoading(true)
    axios
    .get(`${BaseUrl}/chapter/${chapterId}/exercise`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res: AxiosResponse) => res.data)
    .then((data: { data: ExerciseData }) => setExercise(data.data))
    .catch((err: any) =>
      toast({
        variant: "destructive",
        title: "فشل",
        description: err.response?.data.message || err.message,
      })
    ).finally(() => {
      setLoading(false)
    })
  }

  const updateExercise = async () => {
    if (exercise && history) {
      const newExercisesHistory = [...history.exercises, exercise._id]
      setHistory({...history, exercises: newExercisesHistory})
      setNumberCompleted(numberCompleted+1)
    }
    setIsCourse(false)
    await updateExerciseData()
  }

  const finishSession = () => {
    setLoading(true)
    axios
    .post(`${BaseUrl}/user/history`, history, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res: AxiosResponse) => res.data)
    .then((data: { data: UserData }) => {
      setUser(data.data)
      setIsAward(true)
    })
    .catch((err: any) =>
      toast({
        variant: "destructive",
        title: "فشل",
        description: err.response?.data.message || err.message,
      })
    ).finally(() => {
      setLoading(false)
    })
  }

  return (
    <div className="flex-col items-center px-4 lg:px-14">
      {
        !isAward ? <>
        <PracticeNav progressPercent={percent} infoLabel={`${numberCompleted}/${target}`} onExit={() => setOpenExitModal(true)} />
      <div className="w-full flex flex-col items-center justify-center">
      {
        loading ? <img src={LoadingSpinnerIcon} className="w-10" /> : (
          isCourse && courseData ? <Courses videos={courseData.course.videos} onFinish={() => updateExercise()} /> : !isCourse && exercise ? <Exercise exercise={exercise.image.url} onFinish={() => updateExercise()} /> : "error"
        )
      }
      </div>
      <ExitModal openModal={openExitModal} setOpenModal={setOpenExitModal} onFinish={finishSession} /> </> : 
      loading ? <img src={LoadingSpinnerIcon} className="w-10" /> : <Award to={`/subjects/`} />
        }
    </div>
  );
}

export default index;
