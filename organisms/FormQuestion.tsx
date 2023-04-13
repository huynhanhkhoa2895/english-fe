import {useState} from "react";
import {getCookie} from "cookies-next";
import {Question, Result} from "@/types/common";
import QuestionContentTrueFalse from "@/molecules/QuestionContentTrueFalse";
import QuestionContentMultipleChoice from "@/molecules/QuestionContentMultipleChoice";

const FormQuestion = ({type,question} : {type : string, question : Question}) => {




  const RenderContent = () => {
    switch (type) {
      case "true_false":
        return <QuestionContentTrueFalse contents={question.contents} />
      case "multiple_choice":
        return <QuestionContentMultipleChoice question={question} />
    }
  }

  return(
    <>
      <RenderContent />
    </>
  )
}
export default FormQuestion