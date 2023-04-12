import Button from "@/atoms/button";
import Link from "next/link";
import {Lesson} from "@/types/common";

type Props = {
  lesson: Lesson;
  className?: string;
}

const LessonListButtonGroup = ({lesson, className} : Props) => {
  return(
    <div className={'flex items-center justify-between '+className}>
      <div>
        <p><span className={'font-bold'}>Total:</span> {lesson.vocabularies.length || 0}</p>
      </div>
      <div>
        <Link href={'/exercise/'+lesson?.id} >
          <Button>
            Do exercise
          </Button>
        </Link>
      </div>
    </div>
  )
}
export default LessonListButtonGroup