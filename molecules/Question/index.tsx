import {Question, QuestionContent, Result} from "@/types/common";
import QuestionContentTrueFalse from "@/molecules/Question/QuestionContentTrueFalse"
import QuestionContentMultipleChoice from "@/molecules/Question/QuestionContentMultipleChoice";
import {callAPIPushResult} from "@/util/help";
import {toast} from "react-toastify";
import QuestionContentFillIn from "@/molecules/Question/QuestionContentFillIn";
import Loading from "@/atoms/loading";
import {useMemo, useState} from "react";

const Index = ({type,question,level} : { question : Question, level : string, type : string }) => {
  const [loading,setLoading] = useState<boolean>(false)

  const submitSuccess = async (datas: QuestionContent[],data: any) => {
    setLoading(true)
    try{
      const dataResult : Result[] = datas.map((content)=>({
        question: content.question,
        question_title: question.title,
        question_type: question.type,
        answer: data['question_'+content.id] || "",
        correct_answer: content.answer,
        result: (data['question_'+content.id] || '').toLowerCase() === content.answer.toLowerCase()
      }))
      const resultPush = await callAPIPushResult(dataResult).then((result)=>{
        toast.success("Send answer success")
      }).catch(()=>{
        toast.error("Send answer fail")
      })
    } catch (e) {

    }
    setLoading(false)
  }

  const RenderContent = useMemo(() => {
    switch (question.type) {
      case "true_false":
        return <QuestionContentTrueFalse isShowAnswerComponent datas={question.contents} submitSuccess={submitSuccess}/>
      case "multiple_choice":
        return <QuestionContentMultipleChoice isShowAnswerComponent datas={question.contents} submitSuccess={submitSuccess}/>
      case "fill_in":
        return <QuestionContentFillIn isShowAnswerComponent datas={question.contents} submitSuccess={submitSuccess} />
      default:
        return <></>
    }
  },[question])

  return  <div className={'p-3 font-mono relative'}>
    {
        loading && <div className={'absolute top-0 left-0 flex items-center justify-center bg-[#4a4a4a8a] w-full h-full z-10'}>
          <Loading/>
        </div>
    }
    <div className={'bg-white p-3'}>
      <h3 className={'text-lg font-bold text-primary font-roboto'}><span className={'capitalize'}>{type}</span> <span className={'uppercase'}>{level}</span>: {question.title}</h3>
      <p className={'text-sm text-gray-500'}>{question.description}</p>
      {RenderContent}
    </div>
  </div>
}
export default Index
