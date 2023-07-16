'use client';
import LessonListVocabulary from "@/organisms/LessonListVocabulary";
import LessonListButtonGroup from "@/molecules/LessonListButtonGroup";
import {InterviewQuestion, Lesson, Vocabulary} from "@/types/common";
import Accordion from "@/molecules/Accordion";
import Markdown from "@/molecules/Markdown";
import {useEffect, useState} from "react";
import LessonListInterviewQuestion from "@/organisms/LessonListInterviewQuestion";

const LessonDetailTemplate = ({lesson} : {lesson : Lesson}) => {

  const vocabularies : Vocabulary[] = lesson.vocabularies || [];
  const interview_questions : InterviewQuestion[] = lesson.interview_questions || [];

  const [listAccordion,setListAccordion] = useState<any[]>([

  ])

  useEffect(()=>{
    setListAccordion(()=>{
      const newListAccordion = [];

      if(vocabularies.length > 0) {
        newListAccordion.push(
            {
              title: "Vocabularies",
              content:  <LessonListVocabulary vocabulary={vocabularies} />
            },
        )
      }

      if(interview_questions.length > 0) {
        newListAccordion.push(
            {
              title: "Interview Question",
              content:  <LessonListInterviewQuestion questions={interview_questions} />
            },
        )
      }

      return [...newListAccordion]

    })
  },[])

  return(
      <div className={'max-w-[1440px] mx-auto'}>
        {
          lesson && (
              <>
                <LessonListButtonGroup className={'mb-3'} lesson={lesson} />

                {
                  listAccordion && listAccordion.length > 0 && (
                        <Accordion defaultOpen={true} list={listAccordion} />
                    )
                }



              </>
            )
        }
      </div>
  )
}
export default LessonDetailTemplate