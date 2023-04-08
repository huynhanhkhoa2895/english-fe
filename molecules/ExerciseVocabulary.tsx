import useVocabulary from "@/hooks/useVocabulary";
import ExerciseItemVocabulary from "@/molecules/ExerciseItemVocabulary";
import {useState,Fragment} from "react";
import Progress from "@/atoms/progress";
import Button from "@/atoms/button";
import ExcerciseResult from "@/molecules/ExcerciseResult";
import {useRouter} from "next/router";

const ExerciseVocabulary = ({lesson} : {lesson : Lesson}) => {
  const vocabularies = useVocabulary(lesson)
  const [step,setStep] = useState<number>(0)
  const [results,setResult] = useState<VocabularyResult[]>([])
  const router = useRouter();

  const handleFinish = () => {
    setStep(vocabularies.length)
    setResult((results: VocabularyResult[])=>{
      let arr : VocabularyResult[] = results;
      for(let i = step;i < vocabularies.length;i++){
        const vocabulary = vocabularies[i]
        arr = [...arr,...[{vocabulary,result : false,answer : ''}]]
      }
      console.log("arr",arr)
      return arr
    })
  }

  const handleResult = (result : VocabularyResult) => {
    setResult((results: VocabularyResult[])=>{
      return [...results,result]
    })
    setStep((step: number)=>{
      return step+1;
    })
  }

  const reset = () => {
    setStep(0)
    setResult([])
  }

  return <>
    <Progress className={'mb-5'} maxValue={vocabularies.length} currentValue={step} />
    {
      step <= vocabularies.length - 1 && <>
          {vocabularies.map((vocabulary: Vocabulary, index: number) => <Fragment key={vocabulary.id}>
            {step === index && <div className={'pb-5'} >
              <ExerciseItemVocabulary key={vocabulary.id} vocabulary={vocabulary} handleResult={handleResult} />
            </div>}
          </Fragment>)}
          <Button className={'bg-amber-600 w-full'} handleClick={handleFinish}>Finish</Button>
      </>

    }
    {
        step > vocabularies.length - 1 && <ExcerciseResult results={results} reset={reset} />
    }
    </>

}

export default ExerciseVocabulary