import withForm from "@/HOCs/withForm";
import {ComponentWithForm} from "@/types/component";
import { Controller } from "react-hook-form";
import {useEffect, useState} from "react";
import FillInItemAnswer from "@/molecules/Question/FillInItemAnswer";
import {twMerge} from "tailwind-merge";
import FillInItemInput from "@/molecules/Question/FillInItemInput";
import ResultAnswer from "@/molecules/ResultAnswer";

type Answer = {
  answer : string,
  display : boolean
}

const QuestionContentFillIn = withForm(({
 datas = [],
 dataPush,
 isShowAnswer,
 isSubmit,
 setValue,
 control
}: ComponentWithForm) => {
  const [answers,setAnswer] = useState<Answer[]>([]);
  const [chooseAnswer,setChooseAnswer] = useState<string | null>(null);
  const [questions,setQuestions] = useState([]);

  useEffect(()=>{
    const listQuestion = [];
    const listAnswer = [];
    for(const item of datas) {
      listQuestion.push(item.question);
      listAnswer.push({answer : item.answer, display : true});
    }
    setAnswer(listAnswer);
    setQuestions(listQuestion)
  },[])

  const handleChoose = (answer : string) => {
    if(!isSubmit) {
      setChooseAnswer(answer)
    }

  }

  const handleQuestionChoose = (valueChoose : string, type : 'add' | 'remove' | 'replace') => {
    if(!isSubmit) {
      setChooseAnswer(null)
      setAnswer((answers: Answer[])=>{
        const index = answers.findIndex((answer) => answer.answer === valueChoose);
        const crrAnswer = answers[index]
        if(type === 'add') {
          crrAnswer.display = false;
        }  else if(type === 'replace') {
          const indexNewValue = answers.findIndex((answer) => answer.answer === chooseAnswer);
          const crrNewAnswer = answers[indexNewValue]
          crrAnswer.display = true;
          crrNewAnswer.display = false;
          answers[indexNewValue] = crrNewAnswer
        } else  if (index > -1){
          crrAnswer.display = true;
        }
        answers[index] = crrAnswer
        return [...answers]
      })
    }

  }

  return <>
    <div className={'my-5 bg-grey flex gap-3 p-3'}>
      {answers.map((answer,index : number)=> answer.display && <FillInItemAnswer key={index} value={answer.answer} valueChoose={chooseAnswer} onChoose={()=>handleChoose(answer.answer)}  />)}
    </div>

    <div className={'flex gap-5 flex-col w-full'}>

      {questions.map((question,index : number)=> <div className={'flex items-center justify-between w-full relative'} key={index}>
        <div className={'w-full'}>{question}</div>
        <ResultAnswer className={'w-full flex justify-around items-center'} classNameChildren={'w-full max-w-[150px] xl:max-w-[250px]'} status={isSubmit ? (dataPush['question_' + datas[index].id] === datas[index].answer.toLowerCase()) : null} key={index}>
          <FillInItemInput isSubmit={isSubmit} valueChoose={chooseAnswer} name={'question_'+datas[index].id} control={control} onChoose={handleQuestionChoose}  />
          {isShowAnswer && <div
            className={twMerge('capitalize text-sm flex-1 ')}>{datas[index].answer}</div>}
        </ResultAnswer>

      </div>)}
    </div>
  </>
})
export default QuestionContentFillIn