import {QuestionTimeoutType} from "@/types/component";
import ExerciseItemTimeout from "@/molecules/Exercise/ExerciseItemTimeout";
import {useEffect, useRef, useState} from "react";
import {sampleSize} from "lodash";
import {Result} from "@/types/common";
import Progress from "@/atoms/progress";
const ExerciseTimeout = ({data,handleResult,setStep,step,results}:{data : any,handleResult : any,step: number,setStep: any,results : Result[]}) => {
  const [isFirstLoad,setIsFirstLoad] = useState<boolean>(true)
  const [timeout,setTimeout] = useState(0);
  const refTimeout = useRef<any>(null);
  const refTimeoutNumber = useRef<number>(0)
  const [_date,setData] = useState<any>([])

  useEffect(()=>{
    if (window){
      setIsFirstLoad(false)
      setData(sampleSize(data,data.length))
    }
    return () => {
      refTimeout && clearInterval(refTimeout.current)
    }
  },[])

  useEffect(()=>{
    refTimeout && clearInterval(refTimeout.current)
    refTimeoutNumber.current = 0;
    setTimeout(refTimeoutNumber.current)
    refTimeout.current = setInterval(()=>{
      if(refTimeoutNumber.current < 5){
        refTimeoutNumber.current = refTimeoutNumber.current + 1;
        setTimeout(refTimeoutNumber.current)
      }else if(refTimeoutNumber.current === 5){
        const content = data[step];
        console.log("step",step)
        if(content){
          handleResult([...results,...[{
            question : content.question.vocabulary.trim().toLowerCase(),
            result: content.question.id === null,
            answer: "",
            correct_answer: content.question.vocabulary.trim().toLowerCase(),
          }]])
          setStep((step: number)=>{
            return step+1;
          })
        }
        refTimeoutNumber.current = refTimeoutNumber.current + 1;
      }
    },1000)
  },[step])


  return(
      <>
        {
            !isFirstLoad && (
                <div className={'w-full'}>

                  <Progress className={'mb-5'} maxValue={5} currentValue={timeout} displayNumber />
                  {
                    data.map((content: QuestionTimeoutType, index: number) => (
                        step === index &&  <ExerciseItemTimeout setStep={setStep} step={step} key={index} content={content} handleResult={handleResult} results={results} />
                    ))
                  }
                </div>
            )
        }
      </>

  )
}
export default ExerciseTimeout