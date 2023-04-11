import ExerciseVocabulary from "@/molecules/ExerciseVocabulary";
import {Lesson} from "@/types/common";

const LessonExcersiseTemplate = ({lesson} : {lesson : Lesson}) => {
  return(
    <div className={'max-w-[1440px] mx-auto'}>
      <ExerciseVocabulary lesson={lesson} />
    </div>
  )
}
export default LessonExcersiseTemplate