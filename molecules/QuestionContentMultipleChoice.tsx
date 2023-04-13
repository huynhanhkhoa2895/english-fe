import {Question, QuestionContent, QuestionContentValues} from "@/types/common";
import withForm from "@/HOCs/withForm";
import FormControl from "@/molecules/FormControl";
import {ComponentWithForm} from "@/types/component";

const QuestionContentMultipleChoice = withForm(({contents,control} : ComponentWithForm) => {
  return(
    <div className={'w-full'}>
      {
        contents.map((content: QuestionContent, index: number)=> {
          return <>
            <p className={'my-5'}>{content.question}</p>
            <div className={'grid grid-cols-2'}>
            {
              (content.values || []).map((value: QuestionContentValues) => {
              return <FormControl control={control} key={"radio_" + value.value + index} type={'radio'}
                      label={value.label} valueInput={value.value} name={"radio_" + content.id}
                      required/>
              })
            }
            </div>
          </>
        }
        )
      }
    </div>
  )
})
export default QuestionContentMultipleChoice