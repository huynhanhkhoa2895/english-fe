import {Question, QuestionContent} from "@/types/common";
import QuestionContentMultipleChoice from "@/molecules/QuestionContentMultipleChoice";

const data : QuestionContent = {
  id: 1,
  question: 'Test 1',
  answer: 'Test',
  values: [
    {
      label : "Test Answer 1",
      value : "1",
    },
    {
      label : "Test Answer 2",
      value : "2",
    },
    {
      label : "Test Answer 3",
      value : "3",
    },
    {
      label : "Test Answer 4",
      value : "4",
    },
  ]
}

const question : Question = {
  id : 1,
  title: "Test",
  type: "test",
  description: "test",
  contents: [data]
}

const Test = () => {
  return(
    <>
      <QuestionContentMultipleChoice question={question} />
    </>
  )
}
export default Test