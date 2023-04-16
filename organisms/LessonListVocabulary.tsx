import TableVocabulary from "@/molecules/TableVocabulary";
import useVocabulary from "@/hooks/useVocabulary";
import {Lesson} from "@/types/common";

type Props = {
  lesson : Lesson
}

const LessonListVocabulary = ({lesson} : Props) => {
  const {listRandomVocabulary} = useVocabulary()
  return(
    <>
      <TableVocabulary data={listRandomVocabulary(lesson.vocabularies)} />
    </>
  )
}

export default LessonListVocabulary