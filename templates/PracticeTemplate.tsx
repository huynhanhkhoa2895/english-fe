import Accordion from "@/molecules/Accordion";
import {AccordionContent, Practice, QuestionContent} from "@/types/common";
import Markdown from "@/molecules/Markdown";
import Question from "@/molecules/Question"
const PracticeTemplate = ({practice} : {practice : Practice}) => {

  const renderTypeTitle = () => {
    switch (practice.type){
      case "reading":
        return "Reading text"
      case "listening":
        return "Reading text"
      default:
        return ""
    }
  }

  const RenderQuestion = () => {
    const list : AccordionContent[] = practice.questions.map((question: Question,index: number)=>({
      title: "Task "+(index+1),
      content: <Question type={practice.type} level={practice.level} question={question} />
    }))

    return  <Accordion classNameItem={'p-0 bg-gray-500'} list={list} />
  }

  return(
      <>
        {
          practice && (
              <>
                <Accordion list={
                  [
                    {
                      title: "Instructions",
                      content: <Markdown content={practice.instructions || ''} />
                    },
                    {
                      title: renderTypeTitle(),
                      content: <div
                          dangerouslySetInnerHTML={{__html: practice.content || ''}}
                      />
                    }
                  ]
                } />
                <RenderQuestion />
              </>

          )
        }

      </>
  )
}
export default PracticeTemplate