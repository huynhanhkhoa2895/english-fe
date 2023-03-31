import Input from "@/atoms/Input";
import Mask from "@/molecules/Mask";
import {useForm} from "react-hook-form";
import Audio from "@/molecules/Audio";
import Button from "@/atoms/button";
import FormControl from "@/molecules/FormControl";

type Props = {
  vocabulary : Vocabulary;
  handleResult: any;
}

const ExerciseItemVocabulary = ({vocabulary,handleResult} : Props) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data : any) => {
    if(data?.answer )
  }

  return(
      <form className={'grid grid-cols-2 w-full gap-3'} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className={'text-2xl font-bold'}>{vocabulary.translate || ''}</div>
          {vocabulary.sound && <Audio src={vocabulary.sound || ''}/>}
        </div>
        <div>
          <FormControl name={'answer'} register={register} errors={errors} required  />
          <div className={'mt-3'}>
            <Button type={"submit"}>Tiếp theo</Button>
          </div>

        </div>
      </form>
  )
}
export default ExerciseItemVocabulary