import Audio from "@/molecules/Audio";
import Accordion from "@/molecules/Accordion";
import Markdown from "@/molecules/Markdown";
import {InterviewQuestion} from "@/types/common";
import {useState} from "react";
import Button from "@/atoms/button";

const ExerciseInterviewQuestion = ({item} : { item : InterviewQuestion }) => {
  const [display,setDisplay] = useState<boolean>(false)
  return(
      <>
        <div className={'flex flex-col gap-5'}>
          <div className={'mx-auto'}>
            <Audio module={'interview_question'} src={item.sound} autoplay/>
          </div>
          <div className={'mx-auto'}>
            <Button className={'w-[200px] mx-auto'} handleClick={()=>setDisplay(!display)}>Display Question</Button>
          </div>
          {
            display && (
                  <Accordion
                      defaultOpen={false}
                      list={[
                        {
                          title: item.question,
                          content: <Markdown content={item.answer} />
                        }
                      ]}
                  />
              )
          }

        </div>
      </>
  )
}
export default ExerciseInterviewQuestion