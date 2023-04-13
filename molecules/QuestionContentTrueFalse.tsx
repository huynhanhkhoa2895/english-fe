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
import withForm from "@/HOCs/withForm";
import {ComponentWithForm} from "@/types/component";

const QuestionContentTrueFalse = withForm(({contents = [],dataPush,isShowAnswer,isSubmit,control} : ComponentWithForm) => {
  return (
      <>
        {contents.map((content : QuestionContent,index : number)=>{
          return <div key={index} className={'flex max-lg:flex-col justify-between items-center font-thin mb-2'}>
            <div className={'w-full'}>{index+1}. {content.question}</div>
            <div className={'flex gap-3 relative pr-20 w-full'}>
              <ResultAnswer status={isSubmit ? (dataPush['radio_'+content.id] === content.answer.toLowerCase()) : null}>
                <div className={'flex gap-3 w-full'}>
                  <FormControl control={control} type={'radio'} label={"True"} valueInput={"true"} name={"radio_"+content.id} required />
                  <FormControl control={control} type={'radio'} label={"False"} valueInput={"false"} name={"radio_"+content.id} required />
                </div>
              </ResultAnswer>
              {isShowAnswer && <div className={twMerge('capitalize text-sm flex-1 absolute right-0',content.answer.toLowerCase() === dataPush['radio_'+content.id] ? 'text-green' : 'text-red')}>{content.answer}</div>}
            </div>
          </div>
        })}

      </>
  )
})
export default QuestionContentTrueFalse