import LessonVocabulary from "@/organisms/LessonVocabulary";

const LessonDetailTemplate = ({lesson} : {lesson : Lesson}) => {
  const RenderVocabulary = () => {
    return lesson?.vocabularies.map((vocabulary: Vocabulary)=>
        <div className={'pb-5'}>
          <LessonVocabulary key={vocabulary.id} vocabulary={vocabulary} />
        </div>

    )
  }
  return(
      <div className={'max-w-[1440px] mx-auto'}>
        <RenderVocabulary />
      </div>
  )
}
export default LessonDetailTemplate