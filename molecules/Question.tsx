import {Question, QuestionContent, Result} from "@/types/common";
import Accordion from "@/molecules/Accordion";
import QuestionContentTrueFalse from "@/molecules/QuestionContentTrueFalse"
import QuestionContentMultipleChoice from "@/molecules/QuestionContentMultipleChoice";
import {callAPIPushResult} from "@/util/help";

const Question = ({type,question,level} : { question : Question, level : string, type : string }) => {

  const submitSuccess = async (datas: QuestionContent[],data) => {
    const dataResult : Result[] = datas.map((content)=>({
      question_id: content.id,
      question_type: "question",
      question: content.question,
      answer: data['radio_'+content.id] || "",
      correct_answer: content.answer,
      result: data['radio_'+content.id] === content.answer.toLowerCase()
    }))
    const resultPush = await callAPIPushResult(dataResult).then((result)=>{

    })
  }

  const RenderContent = () => {
    switch (question.type) {
      case "true_false":
        return <QuestionContentTrueFalse datas={question.contents} submitSuccess={submitSuccess}/>
      case "multiple_choice":
        return <QuestionContentMultipleChoice datas={question.contents} submitSuccess={submitSuccess}/>
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
export default Question
