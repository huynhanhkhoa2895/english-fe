import TableVocabulary from "@/molecules/TableVocabulary";

type Props = {
  lesson : Lesson
}

const LessonListVocabulary = ({lesson} : Props) => {
  return(
    <>
      <TableVocabulary data={lesson.vocabularies} />
    </>
  )
}

export default LessonListVocabulary