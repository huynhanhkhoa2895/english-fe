import {InterviewQuestion} from "@/types/common";
import {useState} from "react";
import Mask from "@/molecules/Mask";

type Props = {
    data: InterviewQuestion[],
}

const TableInterviewQuestion = ({data}: Props) => {

    const [maskQuestionAll, setMaskQuestionAll] = useState(false)
    const [maskAnswerAll, setMaskAnswerAll] = useState(true)

    return (
        <>
            <table className={'table-fixed w-full border-collapse border border-slate-400'}>
                <thead>
                <tr>
                    <th className={'border border-slate-300 p-3 cursor-pointer'}
                        onClick={() => setMaskQuestionAll(!maskQuestionAll)}>Question
                    </th>
                    <th className={'border border-slate-300 p-3 cursor-pointer'}
                        onClick={() => setMaskAnswerAll(!maskAnswerAll)}>Answer
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((item: InterviewQuestion, index: number) => {
                        return (
                            <tr key={index}>
                                <td className={'border border-slate-300 p-2'}>{item.question &&
                                    <Mask value={item.question} haveMask={maskQuestionAll}/>}</td>
                                <td className={'border border-slate-300 p-2'}>{item.answer &&
                                    <Mask value={item.answer} haveMask={maskAnswerAll}/>}</td>
                            </tr>
                        )
                    })
                }

                </tbody>
            </table>
        </>
    )
}
export default TableInterviewQuestion