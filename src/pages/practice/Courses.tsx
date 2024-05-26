import { ChapterVideoData } from "@/types/chapterVideo";
import Course from "./Course";
import NextBar from "./NextBar";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
// .link

type CoursesProps = {
  videos: ChapterVideoData[];
  onFinish: () => void;
};

function Courses({ videos, onFinish }: CoursesProps) {
  const [videoLink, setVideoLink] = useState<string>(videos[0].link);

  return (
    <div className="w-full flex flex-col items-center justify-between min-h-[calc(100vh-100px)]">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold text-neutral-700 text-end mb-8 w-full">
          الدرس
        </h1>
        {
            videos.length > 1 &&
        (<Pagination className="mb-5">
          <PaginationContent className="flex gap-3">
            {videos.map((video, i) => (
              <PaginationItem onClick={() => setVideoLink(video.link)}>
                <Button className={`${video.link === videoLink ? "bg-sky-400 " : "border-2 border-sky-400 bg-white text-neutral-700"} font-bold text-base hover:text-white hover:bg-sky-400/90`}>
                {i + 1}
                </Button>
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>)
}
        <Course video={videoLink} />
      </div>
      <NextBar next={onFinish} />
    </div>
  );
}

export default Courses;
