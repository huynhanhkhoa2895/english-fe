import {QuestionContent} from "@/types/common";
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
  ]
}
const Test = () => {
  return(
    <>
      <QuestionContentMultipleChoice  />
    </>
  )
}
export default Test