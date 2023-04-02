import TableVocabulary from "@/molecules/TableVocabulary";
import useVocabulary from "@/hooks/useVocabulary";

type Props = {
  lesson : Lesson
}

const LessonListVocabulary = ({lesson} : Props) => {
  const list = useVocabulary(lesson)
  return(
    <>
      <TableVocabulary data={list} />
    </>
  )
}

export default LessonListVocabulary