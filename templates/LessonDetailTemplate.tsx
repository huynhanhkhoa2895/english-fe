import LessonVocabulary from "@/organisms/LessonVocabulary";
import LessonListVocabulary from "@/organisms/LessonListVocabulary";
import LessonListButtonGroup from "@/molecules/LessonListButtonGroup";

const LessonDetailTemplate = ({lesson} : {lesson : Lesson}) => {

  return(
      <div className={'max-w-[1440px] mx-auto'}>
        <LessonListButtonGroup className={'mb-3'} lesson={lesson} />
        <LessonListVocabulary lesson={lesson} />
      </div>
  )
}
export default LessonDetailTemplate