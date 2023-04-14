import {Practice, Question, QuestionContent} from "@/types/common";
import QuestionContentTimeOut from "@/molecules/Timeout/QuestionContentTimeOut";


const PracticeTimeoutTemplate = ({practice} : { practice: Practice }) => {


  return(
    <div className={'w-full'}>
      {practice && practice.questions.map((question: Question)=>(
        question.contents.map((content: QuestionContent, index) => (
          <QuestionContentTimeOut key={index} content={content}  />
        ))
      ))}
    </div>
  )
}
export default PracticeTimeoutTemplate