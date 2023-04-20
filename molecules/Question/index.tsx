import {Question, QuestionContent, Result} from "@/types/common";
import Accordion from "@/molecules/Accordion";
import QuestionContentTrueFalse from "@/molecules/Question/QuestionContentTrueFalse"
import QuestionContentMultipleChoice from "@/molecules/Question/QuestionContentMultipleChoice";
import {callAPIPushResult} from "@/util/help";
import {toast} from "react-toastify";

const Index = ({type,question,level} : { question : Question, level : string, type : string }) => {

  const submitSuccess = async (datas: QuestionContent[],data: any) => {
    const dataResult : Result[] = datas.map((content)=>({
      question_id: content.id,
      question: content.question,
      answer: data['radio_'+content.id] || "",
      correct_answer: content.answer,
      result: data['radio_'+content.id] === content.answer.toLowerCase()
    }))
    const resultPush = await callAPIPushResult(dataResult).then((result)=>{
      toast.success("Send answer success")
    }).catch(()=>{
      toast.error("Send answer fail")
    })
  }

  const RenderContent = () => {
    switch (question.type) {
      case "true_false":
        return <QuestionContentTrueFalse isShowAnswerComponent datas={question.contents} submitSuccess={submitSuccess}/>
      case "multiple_choice":
        return <QuestionContentMultipleChoice isShowAnswerComponent datas={question.contents} submitSuccess={submitSuccess}/>
      default:
        return <></>
    }
  }

  return  <div className={'p-3 font-mono'}>
    <div className={'bg-white p-3'}>
      <h3 className={'text-lg font-bold text-primary font-roboto'}><span className={'capitalize'}>{type}</span> <span className={'uppercase'}>{level}</span>: {question.title}</h3>
      <p className={'text-sm text-gray-500'}>{question.description}</p>
      <RenderContent />
    </div>
  </div>
}
export default Index
