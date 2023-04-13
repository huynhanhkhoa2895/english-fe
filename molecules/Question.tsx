import {Question, QuestionContent} from "@/types/common";
import Accordion from "@/molecules/Accordion";
import QuestionContentTrueFalse from "@/molecules/QuestionContentTrueFalse"
import QuestionContentMultipleChoice from "@/molecules/QuestionContentMultipleChoice";

const Question = ({type,question,level} : { question : Question, level : string, type : string }) => {

  const RenderContent = () => {
    switch (question.type) {
      case "true_false":
        return <QuestionContentTrueFalse question={question}/>
      case "multiple_choice":
        return <QuestionContentMultipleChoice question={question}/>
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
