'use client';

import Accordion from "@/molecules/Accordion";
import {AccordionContent, Practice, Question} from "@/types/common";
import Markdown from "@/molecules/Markdown";
import Index from "@/molecules/Question"
import Video from "@/atoms/video";
import Audio from "@/molecules/Audio";
import {useRef} from "react";
import useReading from "@/hooks/useReading";
import {ToastContainer} from "react-toastify";
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-toastify/dist/ReactToastify.css';

const PracticeTemplate = ({practice} : {practice : Practice}) => {
  const refContent = useRef<HTMLDivElement | null>(null);
  useReading(refContent)
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
    const list : AccordionContent[] = practice.questions.map((question: Question, index: number)=>({
      title: "Task "+(index+1),
      content: <Index type={practice.type} level={practice.level} question={question} practice_id={practice.id} />
    }))

    return  <Accordion classNameItem={'p-0 bg-gray-500'} list={list} />
  }

  const RenderMedia = () => {
    if(practice?.media?.type?.search("audio") > -1) {
      return <Audio src={practice.media.url} icon={false} />
    }
    return null
  }

  const RenderVideo = () => {
    return <Video src={practice.link_video} playing={false} />
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
                      ref={refContent}
                      id={practice.type === 'reading' ? 'content-reading' : ''}
                      dangerouslySetInnerHTML={{__html: practice.content || ''}}
                  />
                }
              ]
            } />
            <div className={'w-full mb-3'}>
              <RenderMedia />
            </div>
            {
              practice?.link_video && (
                <div className={'w-full mb-3'}>
                  <RenderVideo />
                </div>
              )
            }
            <RenderQuestion />
          </>
        )
      }
      <ToastContainer />
    </>
  )
}

export default PracticeTemplate