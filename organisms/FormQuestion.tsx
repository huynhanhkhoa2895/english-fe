import {Question} from "@/types/common";
import QuestionContentTrueFalse from "@/molecules/QuestionContentTrueFalse";
import QuestionContentMultipleChoice from "@/molecules/QuestionContentMultipleChoice";

const FormQuestion = ({type,question} : {type : string, question : Question}) => {
  const RenderContent = () => {
    switch (type) {
      case "true_false":
        return <QuestionContentTrueFalse question={question} />
      case "multiple_choice":
        return <QuestionContentMultipleChoice question={question} />
      default:
        return <></>
    }
  }

  return(
    <>
      <RenderContent />
    </>
  )
}
export default FormQuestion