import {QuestionContent} from "@/types/common";
import FormControl from "@/molecules/FormControl";
import {twMerge} from "tailwind-merge";
import ResultAnswer from "@/molecules/ResultAnswer";
import withForm from "@/HOCs/withForm";
import {ComponentWithForm} from "@/types/component";

const QuestionContentTrueFalse = withForm(({
                                               datas = [],
                                               dataPush,
                                               isShowAnswer,
                                               isSubmit,
                                               control
                                           }: ComponentWithForm) => {
    return (
        <div className={'mt-5'}>
            {datas.map((content: QuestionContent, index: number) => {
                return <div key={index} className={'flex max-lg:flex-col justify-between items-center font-thin mb-2'}>
                    <div className={'w-full'}>{index + 1}. {content.question}</div>
                    <div className={'flex gap-3 relative pr-20 w-full justify-end'}>
                        <ResultAnswer className={'p-1 lg:p-2 flex gap-3'}
                                      status={isSubmit ? (dataPush['question_' + content.id] === content.answer.toLowerCase()) : null}>
                            <div className={'flex gap-3 w-full'}>
                                <FormControl control={control} type={'radio'} label={"True"} valueInput={"true"}
                                             name={"question_" + content.id} required disabled={isSubmit}/>
                                <FormControl control={control} type={'radio'} label={"False"} valueInput={"false"}
                                             name={"question_" + content.id} required disabled={isSubmit}/>
                            </div>
                        </ResultAnswer>
                        {isShowAnswer && <div
                            className={twMerge('capitalize text-sm flex-1 absolute right-0', content.answer.toLowerCase() === dataPush['question_' + content.id] ? 'text-green' : 'text-red')}>{content.answer}</div>}
                    </div>
                </div>
            })}

        </div>
    )
})
export default QuestionContentTrueFalse