import { ChapterData } from "./chapter"

export type SubjectData = {
    logo: {
        filename: string,
        url: string
    },
    _id: string,
    name: string,
    chapters: ChapterData[]
}