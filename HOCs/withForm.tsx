import { useForm } from 'react-hook-form';
import React, {useState} from 'react';
import Button from "@/atoms/button";
import {Question, Result} from "@/types/common";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faList} from "@fortawesome/free-solid-svg-icons";
import {getCookie} from "cookies-next";

type PropsForm = {
  defaultValues: {
    [key: string]: any;
  };
  idForm?: string;
};

type PropsChildForm = {
  submitText?: JSX.Element|string;
  loading?: boolean;
  question: Question;
};
const withForm = (FieldsComponent: any) => {
  // eslint-disable-next-line react/display-name
  return ({ submitText, loading, question }: PropsChildForm) => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const [isShowAnswer,setShowAnswer] = useState<boolean>(false)
    const [isSubmit,setIsSubmit] = useState<boolean>(false)

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

    const onSubmit = (data : any) => {
      setIsSubmit(true)
      if(!isSubmit) {
        const dataResult : Result[] = question.contents.map((content)=>({
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
      <form onSubmit={handleSubmit(onSubmit)} id={`form`}>
        <FieldsComponent
          question={question}
          loading={loading || false}
          control={control}
          errors={errors}
        />
        <div className={'mt-3 flex gap-1'}>
          {isSubmit && <Button type={'button'} className={'flex gap-1 items-center'} round={false} size={'sm'} variant={'secondary'}
                               handleClick={() => setShowAnswer(true)}><><FontAwesomeIcon icon={faList} width={15}/> Show Answer</>
          </Button>}
          <Button type={'submit'} className={'flex gap-1 items-center'} round={false} size={'sm'}><><FontAwesomeIcon icon={faCheck} width={15} /> Finish</></Button>
        </div>
        <Button
          type={'submit'}
          disabled={loading || false}
        >
          {submitText || ''}
        </Button>
      </form>
    );
  };
};
export default withForm;
