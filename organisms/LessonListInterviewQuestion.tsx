import {InterviewQuestion} from "@/types/common";
import TableInterviewQuestion from "@/molecules/TableInterviewQuestion";

type Props = {
    questions: InterviewQuestion[]
}

const LessonListInterviewQuestion = ({questions}: Props) => {

    return (
        <>
            <TableInterviewQuestion data={questions}/>
        </>
    )
}
export default LessonListInterviewQuestion