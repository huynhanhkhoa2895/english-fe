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
        <Link className={'mr-2 max-lg:mb-2 max-lg:block'} href={'/exercise/interview_question/'+lesson?.id} >
          <Button>
            Exercise Interview Question Input
          </Button>
        </Link>
        <Link className={'mr-2 max-lg:mb-2 max-lg:block'} href={'/exercise/vocabulary/'+lesson?.id} >
          <Button>
            Exercise Vocabulary Input
          </Button>
        </Link>
        <Link className={'max-lg:block'} href={'/exercise/vocabulary/'+lesson?.id+'?type=timeout'} >
          <Button>
            Exercise Vocabulary Timeout
          </Button>
        </Link>
      </div>
    </div>
  )
}
export default LessonListButtonGroup