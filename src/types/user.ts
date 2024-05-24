import { CourseData } from "./course"

export type UserData = {
    history: {
        exercises: string[],
        courses: CourseData[]
    },
    xp: number,
    _id: string,
    userName: string,
    email: string,
    password: string,
    class: string,
    role: string,
    createdAt: string,
    updatedAt: string,
}