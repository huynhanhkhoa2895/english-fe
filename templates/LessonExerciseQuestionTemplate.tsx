'use client';

import {InterviewQuestion} from "@/types/common";
import {useMemo, useState} from "react";
import Accordion from "@/molecules/Accordion";
import Button from "@/atoms/button";
import Markdown from "@/molecules/Markdown";
import Audio from "@/molecules/Audio";
import ExerciseInterviewQuestion from "@/molecules/Exercise/ExerciseInterviewQuestion";
import useVocabulary from "@/hooks/useVocabulary";

type Props = {
  data: InterviewQuestion[]
}

const LessonExerciseQuestionTemplate = ({data} : Props) => {

  const [step,setStep] = useState<number>(0)
  const {listRandomData} = useVocabulary()
  const [_data,setData] = useState<any[]>(listRandomData(data))
  const renderFinish = () => {
    return <h3>Finish</h3>
  }

  const RenderExercise = useMemo(() => {
    const item: InterviewQuestion = _data[step];

    if(item){
      return (
        <ExerciseInterviewQuestion key={item.question} item={item} />
      )
    }
    return renderFinish()

  },[step])

  return(
      <>
        <div className={'max-w-[1440px] mx-auto flex flex-col'}>
          {RenderExercise}

          <Button className={'mt-5'} handleClick={()=>setStep(step+1)}>
            Next Question
          </Button>

        </div>
      </>
  )
}
export default LessonExerciseQuestionTemplate