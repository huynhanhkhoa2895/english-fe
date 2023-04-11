import {Question, QuestionContent} from "@/types/common";
import Accordion from "@/molecules/Accordion";
import QuestionContentTrueFalse from "@/molecules/QuestionContentTrueFalse"

const Question = ({type,question,level} : { question : Question, level : string, type : string }) => {

  const RenderContent = () => {
    switch (question.type) {
      case "true_false":
        return <QuestionContentTrueFalse contents={question.contents} />
      default:
        return <></>
    }
  }

  return  <div className={'p-3 font-mono'}>
    <div className={'bg-white p-3'}>
      <h3><span className={'capitalize'}>{type}</span> <span className={'uppercase'}>{level}</span>: {question.title}</h3>
      <p>{question.description}</p>
      <RenderContent />
    </div>
  </div>
}
export default Question
