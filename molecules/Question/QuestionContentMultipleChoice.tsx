import {Question, QuestionContent, QuestionContentValues} from "@/types/common";
import withForm from "@/HOCs/withForm";
import FormControl from "@/molecules/FormControl";
import {ComponentWithForm} from "@/types/component";
import {Fragment} from "react";
import ResultAnswer from "@/molecules/ResultAnswer";

const QuestionContentMultipleChoice = withForm(({datas, control, dataPush, isShowAnswer,isSubmit}: ComponentWithForm) => {
  return (
    <div className={'w-full'}>
      {
        datas.map((content: QuestionContent, index: number) => {
            return <Fragment key={'QuestionContentMultipleChoice_'+index}>
              <p className={'my-5'}>{content.question}</p>
              <div className={'grid grid-cols-1 lg:grid-cols-2 gap-3'}>
                {
                  (content.values || []).map((value: QuestionContentValues) => {
                    return (
                    <ResultAnswer
                        key={"question_" + value.value + index}
                        value={value.value}
                        answer={content.answer}
                        isShowAnswer={isShowAnswer || null}
                        className={'p-1 lg:p-2 flex gap-3'}
                        status={dataPush && dataPush["question_" + content.id] === value.value ? dataPush["question_" + content.id] === content.answer  : null}>
                      <FormControl
                          control={control}
                          type={'radio'}
                          label={value.label}
                          valueInput={value.value}
                          name={"question_" + content.id}
                          disabled={isSubmit}
                          required
                      />
                    </ResultAnswer>
                    )

                  })
                }
              </div>
            </Fragment>
          }
        )
      }
    </div>
  )
})
export default QuestionContentMultipleChoice