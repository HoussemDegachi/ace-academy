import { ChapterVideoData } from "./chapterVideo"
import { ExerciseData } from "./exercise"

export type ChapterData = {
    course: {
        videos: ChapterVideoData[]
    },
    _id: string,
    name: string,
    trimester: number,
    order: number,
    exercises: ExerciseData[]
}