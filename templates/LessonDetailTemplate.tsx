import LessonListVocabulary from "@/organisms/LessonListVocabulary";
import LessonListButtonGroup from "@/molecules/LessonListButtonGroup";
import {Lesson} from "@/types/common";

const LessonDetailTemplate = ({lesson} : {lesson : Lesson}) => {

  return(
      <div className={'max-w-[1440px] mx-auto'}>
        {
          lesson && (
              <>
                <LessonListButtonGroup className={'mb-3'} lesson={lesson} />
                <LessonListVocabulary lesson={lesson} />
              </>
            )
        }
      </div>
  )
}
export default LessonDetailTemplate