import useVocabulary from "@/hooks/useVocabulary";
import ExerciseItemVocabulary from "@/molecules/ExerciseItemVocabulary";
import {useState} from "react";



const ExerciseVocabulary = ({lesson} : {lesson : Lesson}) => {
  const vocabularies = useVocabulary(lesson)
  const [step,setStep] = useState<number>(0)
  const [result,setResult] = useState<VocabularyResult[]>([])

  const handleResult = () => {

  }

  return vocabularies.map((vocabulary: Vocabulary, index: number)=>
    <div className={'pb-5 '+(step === index ? 'block' : 'hidden')} key={vocabulary.id}>
      <ExerciseItemVocabulary key={vocabulary.id} vocabulary={vocabulary} handleResult={handleResult} />
    </div>
  )
}

export default ExerciseVocabulary