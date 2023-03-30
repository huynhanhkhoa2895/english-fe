import Input from "@/atoms/Input";
import Mask from "@/molecules/Mask";
import {useForm} from "react-hook-form";
import Audio from "@/molecules/Audio";

type Props = {
  vocabulary : Vocabulary;

}

const LessonVocabulary = ({vocabulary} : Props) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = () => {

  }

  return(
      <form className={'grid grid-cols-2 w-full gap-3'} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Mask value={vocabulary.translate || '' } />
          {vocabulary.sound && <Audio src={vocabulary.sound || ''}/>}
        </div>
        <div>
          <Input name={'answer'} register={register} required />
        </div>
      </form>
  )
}
export default LessonVocabulary