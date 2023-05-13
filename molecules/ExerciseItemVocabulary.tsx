import {useForm} from "react-hook-form";
import Button from "@/atoms/button";
import FormControl from "@/molecules/FormControl";
import Mask from "@/molecules/Mask";
import {Vocabulary} from "@/types/common";
import dynamic from 'next/dynamic'
import {useMemo} from "react";

const Audio = dynamic(()=> import("@/molecules/Audio"))
type Props = {
  vocabulary : Vocabulary;
  handleResult: any;
}

const ExerciseItemVocabulary = ({vocabulary,handleResult} : Props) => {
  const { register, handleSubmit, watch, formState: { errors }, control } = useForm();

  const onSubmit = (data : any) => {
    if(data?.answer){
      handleResult({
        question : vocabulary.vocabulary.toLowerCase(),
        result: data?.answer.toLowerCase() === vocabulary.vocabulary.toLowerCase(),
        answer: data?.answer,
        correct_answer: vocabulary.vocabulary,
      })
    }
  }

  const renderMask = useMemo(()=>{
    return <Mask value={vocabulary.translate || ''} haveMask sound={vocabulary.sound || ''} />
  },[])

  return(
      <form autoComplete={"off"} className={'grid grid-cols-1 lg:grid-cols-2 w-full gap-3'} onSubmit={handleSubmit(onSubmit)}>
        <div className={''}>
          {renderMask}
        </div>
        <div>
          <FormControl control={control} name={'answer'} register={register} errors={errors} required autofocus />
          <div className={'mt-3 text-right'}>
            <Button type={"submit"}>Next</Button>
          </div>
        </div>
      </form>
  )
}
export default ExerciseItemVocabulary