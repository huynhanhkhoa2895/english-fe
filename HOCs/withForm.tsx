import { useForm } from 'react-hook-form';
import React, {ButtonHTMLAttributes, FC, useEffect, useRef, useState} from 'react';
import Button from "@/atoms/button";
import { Question, Result} from "@/types/common";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faList} from "@fortawesome/free-solid-svg-icons";
import {getCookie} from "cookies-next";
import {ComponentWithForm} from "@/types/component";
import {twMerge} from "tailwind-merge";

type Props = {
  submitText? : string | JSX.Element,
  datas: Array<any>;
  submitSuccess?: any;
  isShowAnswerComponent?: boolean
  clickForSubmit?: boolean
}

const withForm = (FieldsComponent: FC<ComponentWithForm>) => {
  // eslint-disable-next-line react/display-name
  return ({ submitText, datas, submitSuccess,isShowAnswerComponent,clickForSubmit,...rest }: Props) => {
    const {
      control,
      handleSubmit,
      formState: { errors },
      watch
    } = useForm();

    const [isShowAnswer,setShowAnswer] = useState<boolean>(false)
    const [isSubmit,setIsSubmit] = useState<boolean>(false)
    const [loading,setLoading] = useState<boolean>(false)
    const [dataPush,setDataPush] = useState<any>(null)
    const submitRef = useRef<HTMLButtonElement | null>(null)

    useEffect(()=>{
      if(clickForSubmit) {
        const subscription = watch((value, { name, type }) => {
          if(value != null) {
            if(submitRef.current) {
              submitRef.current?.click()
            }
          }
        });
        return () => subscription.unsubscribe();
      }
    },[watch])

    const submit = async (data : any) => {
      setIsSubmit(true)
      setDataPush(data);
      setLoading(true)
      if(!isSubmit) {
        submitSuccess && submitSuccess(datas,data)

      }
      setLoading(false)
    }

    const onError = (e: any) => {
      console.log("onError",e)

    }

    return (
      <form onSubmit={handleSubmit(submit,onError)}>
        <FieldsComponent
          control={control}
          errors={errors}
          isSubmit={isSubmit}
          isShowAnswer={isShowAnswer}
          dataPush={dataPush}
          datas={datas}
          submitSuccess={submitSuccess}
          {...rest}
        />
        <div className={'mt-3 flex gap-1'}>
          {isShowAnswerComponent && isSubmit &&
            <Button
              type={'button'}
              className={'flex gap-1 items-center'}
              round={false}
              size={'sm'}
              variant={'secondary'}
              handleClick={() => setShowAnswer(true)}
            >
                <><FontAwesomeIcon icon={faList} width={15}/> Show Answer</>
            </Button>
          }
          <Button ref={submitRef} type={'submit'} className={twMerge('flex gap-1 items-center',clickForSubmit ? 'hidden' : '')} round={false} size={'sm'}>
            {submitText || <><FontAwesomeIcon icon={faCheck} width={15} /> Finish</>}
          </Button>
        </div>
      </form>
    );
  };
};
export default withForm;
