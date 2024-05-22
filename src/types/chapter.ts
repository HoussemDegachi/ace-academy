export type ChapterData = {
    course: {
        video: {
            yId: string,
            link: string,
            duration: number
        }
    },
    _id: string,
    name: string,
    trimester: number,
    order: number,
    exercises: string[]
}