import {useForm} from "react-hook-form";
import Audio from "@/molecules/Audio";
import Button from "@/atoms/button";
import FormControl from "@/molecules/FormControl";
import Mask from "@/molecules/Mask";
import {Vocabulary} from "@/types/common";

type Props = {
  vocabulary : Vocabulary;
  handleResult: any;
}

const ExerciseItemVocabulary = ({vocabulary,handleResult} : Props) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data : any) => {
    if(data?.answer){
      handleResult({
        question : vocabulary.vocabulary,
        result: data?.answer === vocabulary.vocabulary,
        answer: data?.answer,
        correct_answer: vocabulary.vocabulary,
        question_type: 'vocabulary'
      })
    }
  }

  return(
      <form autoComplete={"off"} className={'grid grid-cols-2 w-full gap-3'} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className={'text-2xl font-bold mb-2'}><Mask value={vocabulary.translate || ''} haveMask /></div>
          {vocabulary.sound && <Audio src={vocabulary.sound || ''} autoplay={true}/>}
        </div>
        <div>
          <FormControl name={'answer'} register={register} errors={errors} required autofocus />
          <div className={'mt-3 text-right'}>
            <Button type={"submit"}>Next</Button>
          </div>
        </div>
      </form>
  )
}
export default ExerciseItemVocabulary