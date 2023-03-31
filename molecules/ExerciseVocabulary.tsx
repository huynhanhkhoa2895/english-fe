import useVocabulary from "@/hooks/useVocabulary";
import LessonVocabulary from "@/organisms/LessonVocabulary";

const ExerciseVocabulary = ({lesson} : {lesson : Lesson}) => {
  const vocabularies = useVocabulary(lesson)
  return vocabularies.map((vocabulary: Vocabulary)=>
    <div className={'pb-5'} key={vocabulary.id}>
      <LessonVocabulary key={vocabulary.id} vocabulary={vocabulary} />
    </div>
  )
}

export default ExerciseVocabulary