import { useForm } from 'react-hook-form';
import React, {FC, useState} from 'react';
import Button from "@/atoms/button";
import { Question, Result} from "@/types/common";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faList} from "@fortawesome/free-solid-svg-icons";
import {getCookie} from "cookies-next";
import {ComponentWithForm} from "@/types/component";

const withForm = (FieldsComponent: FC<ComponentWithForm>) => {
  // eslint-disable-next-line react/display-name
  return ({ submitText, question }: {submitText? : string | JSX.Element, question: Question}) => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const [isShowAnswer,setShowAnswer] = useState<boolean>(false)
    const [isSubmit,setIsSubmit] = useState<boolean>(false)
    const [loading,setLoading] = useState<boolean>(false)
    const [dataPush,setDataPush] = useState<any>(null)
    const handleShowAnswer = (value: boolean) => {
      setShowAnswer(value)
    }

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

    const onSubmit = async (data : any) => {
      console.log("onSubmit")
      setIsSubmit(true)
      setDataPush(data);
      setLoading(true)
      if(!isSubmit) {
        const dataResult : Result[] = question.contents.map((content)=>({
          question_id: content.id,
          question_type: "question",
          question: content.question,
          answer: data['radio_'+content.id] || "",
          correct_answer: content.answer,
          result: data['radio_'+content.id] === content.answer.toLowerCase()
        }))
        const result = await callAPI(dataResult).then((result)=>{

        })
      }
      setLoading(false)
    }

    const onError = (e: any) => {
      console.log("onError",e)

    }

    return (
      <form onSubmit={handleSubmit(onSubmit,onError)}>
        <FieldsComponent
          control={control}
          errors={errors}
          isSubmit={isSubmit}
          isShowAnswer={isShowAnswer}
          dataPush={dataPush}
          contents={question.contents}
        />
        <div className={'mt-3 flex gap-1'}>
          {isSubmit && <Button type={'button'} className={'flex gap-1 items-center'} round={false} size={'sm'} variant={'secondary'}
                               handleClick={() => setShowAnswer(true)}><><FontAwesomeIcon icon={faList} width={15}/> Show Answer</>
          </Button>}
          <Button type={'submit'} className={'flex gap-1 items-center'} round={false} size={'sm'}>
            {submitText || <><FontAwesomeIcon icon={faCheck} width={15} /> Finish</>}
          </Button>
        </div>
      </form>
    );
  };
};
export default withForm;
