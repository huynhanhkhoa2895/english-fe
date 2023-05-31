import {twMerge} from "tailwind-merge";
import {QuestionTimeoutType} from "@/types/component";
import Button from "@/atoms/button";
import {Result, Vocabulary} from "@/types/common";
import Audio from "@/molecules/Audio";
import {useEffect, useState} from "react";


const ExerciseItemTimeout = ({content,handleResult,setStep,results,step} : {content : QuestionTimeoutType,step: number,handleResult: any,setStep: any,results : Result[]}) => {
  const [isFirstLoad,setIsFirstLoad] = useState<boolean>(true)

  useEffect(()=>{
    if (window){
      setIsFirstLoad(false)
    }
  },[])

  const clickResult = (value: {vocabulary : string, id : string|number}) => {
    handleResult([...results,...[{
      question : content.question.vocabulary.trim().toLowerCase(),
      result: content.question.id === value.id,
      answer: value.vocabulary,
      correct_answer: content.question.vocabulary.trim().toLowerCase(),
    }]])
    setStep((step: number)=>{
      return step+1;
    })
  }

  return(
      <>
        {!isFirstLoad && (
            <div className={twMerge('transition-all duration-300', 'opacity-100 visible')}>
              <div className={'text-[36px] text-center'}>
                {content.question.vocabulary} ({content.question.parts_of_speech})
                <div><Audio src={content.question.vocabulary+'.mp3' || ''} autoplay={true}/></div>
              </div>
              <div className={'border-t border-grey-500 py-10'}>
                <div className={'w-full grid grid-cols-1 lg:grid-cols-2 gap-5'}>
                  {
                    content.values.map((value: Vocabulary, index: number) => {
                          return <Button key={index} className={'bg-white text-black border border-primary transition-all duration-300 hover:bg-primary hover:text-white'} handleClick={()=>clickResult({vocabulary : value.vocabulary,id : value.id})}>
                            {value?.translate || ''}
                          </Button>
                        }
                    )
                  }
                </div>

              </div>
            </div>
        )}

      </>
  )
}
export default ExerciseItemTimeout