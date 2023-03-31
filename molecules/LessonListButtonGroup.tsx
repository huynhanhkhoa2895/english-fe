import Button from "@/atoms/button";
import Link from "next/link";

type Props = {
  lesson: Lesson;
  className?: string;
}

const LessonListButtonGroup = ({lesson, className} : Props) => {
  return(
    <div className={'flex justify-end '+className}>
      <Link href={'/exercise/'+lesson.id} >
        <Button>
          Do exercise
        </Button>
      </Link>
    </div>
  )
}
export default LessonListButtonGroup