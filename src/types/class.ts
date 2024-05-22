import { SubjectData } from "./subject";

export type ClassData = {
    _id: string,
    name: string,
    orientation: string,
    grade: number,
    state: string,
    subjects: SubjectData[],
}