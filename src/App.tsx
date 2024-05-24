import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./css/output.css";
import Home from "@/pages/home/index";
import { useEffect } from "react";
import { useAuth } from "./contexts/AuthProvider";
import { useUser } from "./contexts/UserProvider";
import axios, { AxiosResponse } from "axios";
import { UserData } from "./types/user";
import { Toaster } from "./components/ui/toaster";
import MainLayout from "./components/layouts/MainLayout";
import Subjects from "@/pages/subjects/index"
import Subject from "@/pages/subject/index";
import Practice from "@/pages/practice/index"
import NotFound from "./pages/NotFound";

function App() {
  const serverBase = import.meta.env.VITE_SERVER_URL;
  const { token, logout } = useAuth();
  const { setUser, setLoadingUser } = useUser();

  useEffect(() => {
    if (!token) {
      setUser(null);
      setLoadingUser(false);
      return;
    }

    axios
      .get(`${serverBase}/user`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res: AxiosResponse) => res.data)
      .then((data: { data: UserData }) => setUser(data.data))
      .catch(() => {
        logout();
      })
      .finally(() => setLoadingUser(false));
  }, [token]);

  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subjects" element={<MainLayout><Subjects /></MainLayout>} />
        <Route path="/subjects/:subjectId" element={<MainLayout><Subject /></MainLayout>} />
        <Route path="/practice/:chapterId" element={<Practice />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
