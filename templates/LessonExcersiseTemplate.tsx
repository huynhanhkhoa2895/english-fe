import ExerciseVocabulary from "@/molecules/Exercise/ExerciseVocabulary";
import {Result, Vocabulary} from "@/types/common";
import {useEffect, useRef, useState} from "react";
import ExcerciseResult from "@/molecules/Exercise/ExcerciseResult";
import ExerciseTimeout from "@/molecules/Exercise/ExerciseTimeout";
import {sampleSize} from "lodash";
import Progress from "@/atoms/progress";

const LessonExcersiseTemplate = ({data,type} : {data : any,type : string}) => {
  const [results,setResult] = useState<Result[]>([])
  const [step,setStep] = useState<number>(0)
  const ref = useRef<any>()

  const handleResult = (results : Result[]) => {
    setResult(()=>results)
  }

  const handleReset = () => {
    if(ref?.current){
      ref.current.handleReset()
    }
  }

  return(
    <div className={'max-w-[1440px] mx-auto'}>
      <Progress className={'mb-5'} maxValue={data.length} currentValue={step} />
      {
          type === "timeout" ? <ExerciseTimeout results={results} data={data} step={step} setStep={setStep} handleResult={handleResult} /> :
              <ExerciseVocabulary
                ref={ref}
                step={step}
                setStep={setStep}
                results={results}
                handleResult={handleResult}
                vocabularies={data}
            />
      }
      {step > data.length - 1 && <ExcerciseResult results={results} reset={handleReset}/>}
    </div>
  )
}
export default LessonExcersiseTemplate