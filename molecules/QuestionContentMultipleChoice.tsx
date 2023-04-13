import {Question, QuestionContent} from "@/types/common";
import withForm from "@/HOCs/withForm";
import FormControl from "@/molecules/FormControl";

type Props = {
  question: Question
}
const QuestionContentMultipleChoice = withForm(({question} : Props) => {

  return(
    <div className={'w-full'}>
      <div className={'grid grid-cols-2'}>
        {question.contents.map((content: QuestionContent, index: number)=>{
          return <FormControl key={index} type={'radio'} label={"True"} value={"true"} name={"radio_"+content.id} register={register} required />
        })}
      </div>

    </div>
  )
})
export default QuestionContentMultipleChoice