import {QuestionContentValues} from "@/types/common";
import withForm from "@/HOCs/withForm";
import FormControl from "@/molecules/FormControl";
import {ComponentWithForm} from "@/types/component";


const QuestionValuesTimeOut = withForm(({datas,control,questionContent} : any) => {

  return(
    <div className={'w-full grid grid-cols-1 lg:grid-cols-2'}>
      {
        datas.map((value: QuestionContentValues, index: number) => {
            return <FormControl
                  control={control}
                  key={"radio_" + value.value + index}
                  type={'radio'}
                  label={value.label}
                  valueInput={value.value}
                  name={"radio_" + (questionContent.id || '')}
                  required/>
          }
        )
      }
    </div>
  )
})
export default QuestionValuesTimeOut