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
        <Link className={'mr-2 max-lg:mb-2 max-lg:block'} href={'/exercise/'+lesson?.id} >
          <Button>
            Exercise Input
          </Button>
        </Link>
        <Link className={'max-lg:block'} href={'/exercise/'+lesson?.id+'?type=timeout'} >
          <Button>
            Exercise Timeout
          </Button>
        </Link>
      </div>
    </div>
  )
}
export default LessonListButtonGroup