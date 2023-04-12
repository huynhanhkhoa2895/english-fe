import {QuestionContent, Result} from "@/types/common";
import {useForm} from "react-hook-form";
import FormControl from "@/molecules/FormControl";
import Button from "@/atoms/button";
import {faCheck, faList} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {twMerge} from "tailwind-merge";
import {getCookie} from "cookies-next";
import ResultAnswer from "@/molecules/ResultAnswer";

const QuestionContentTrueFalse = ({contents} : { contents: QuestionContent[] }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [isShowAnswer,setShowAnswer] = useState<boolean>(false)
  const [isSubmit,setIsSubmit] = useState<boolean>(false)
  const callAPI = async (data : any) => {
    const result = await fetch("/api/create-result",{
      method: "POST",
      body: JSON.stringify({data}),
      headers: {
        "Authorization": "Bearer "+getCookie("token")
      }
    }).catch((e)=>e)
    console.log(result)
  }

  const onSubmit = (data : any) => {
    setIsSubmit(true)
    if(!isSubmit) {
      const dataResult : Result[] = contents.map((content)=>({
        question_id: content.id,
        question_type: "question",
        question: content.question,
        answer: data['radio_'+content.id] || "",
        correct_answer: content.answer,
        result: data['radio_'+content.id] === content.answer.toLowerCase()
      }))
      callAPI(dataResult).then((result)=>{

      })
    }

  }

  return (
      <form className={'mt-8 w-[80%] mx-auto'} onSubmit={handleSubmit(onSubmit)}>
        {(contents || []).map((content : QuestionContent,index : number)=>{
          return <div key={index} className={'flex max-lg:flex-col justify-between items-center font-thin mb-2'}>
            <div>{index+1}. {content.question}</div>
            <div className={'flex gap-3 relative pr-20 w-full'}>
              <ResultAnswer status={isSubmit ? ((watch as any)('radio_'+content.id) === content.answer.toLowerCase()) : null}>
                <div className={'flex gap-3 w-full'}>
                  <FormControl type={'radio'} label={"True"} value={"true"} name={"radio_"+content.id} register={register} required />
                  <FormControl type={'radio'} label={"False"} value={"false"} name={"radio_"+content.id} register={register} required />
                </div>
              </ResultAnswer>
              {isShowAnswer && <div className={twMerge('capitalize text-sm flex-1 absolute right-0',content.answer.toLowerCase() === (watch as any)('radio_'+content.id) ? 'text-green' : 'text-red')}>{content.answer}</div>}
            </div>
          </div>
        })}
        <div className={'mt-3 flex gap-1'}>
          {isSubmit && <Button type={'button'} className={'flex gap-1 items-center'} round={false} size={'sm'} variant={'secondary'}
                   handleClick={() => setShowAnswer(true)}><><FontAwesomeIcon icon={faList} width={15}/> Show Answer</>
          </Button>}
          <Button type={'submit'} className={'flex gap-1 items-center'} round={false} size={'sm'}><><FontAwesomeIcon icon={faCheck} width={15} /> Finish</></Button>
        </div>

      </form>
  )
}
export default QuestionContentTrueFalse