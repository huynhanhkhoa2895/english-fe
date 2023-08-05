'use client';

import {InterviewQuestion} from "@/types/common";
import {useEffect, useMemo, useState} from "react";
import Button from "@/atoms/button";
import ExerciseInterviewQuestion from "@/molecules/Exercise/ExerciseInterviewQuestion";
import useVocabulary from "@/hooks/useVocabulary";

type Props = {
    data: InterviewQuestion[]
}

const LessonExerciseQuestionTemplate = ({data}: Props) => {

    const [step, setStep] = useState<number>(0)
    const {listRandomData} = useVocabulary()
    const [_data, setData] = useState<any[]>([])

    useEffect(() => {
        setData(listRandomData(data))
    }, [])
    const renderFinish = () => {
        return <h3>Finish</h3>
    }

    const RenderExercise = useMemo(() => {
        const item: InterviewQuestion = _data[step];
        if (_data.length > 0) {
            if (item) {
                return (
                    <ExerciseInterviewQuestion key={item.question} item={item}/>
                )
            }
            return renderFinish()
        }
    }, [step, _data])

    return (
        <>
            <div className={'max-w-[1440px] mx-auto flex flex-col'}>
                {RenderExercise}

                <div className={'flex gap-5'}>
                    {
                        step > 0 && (
                            <Button className={'mt-5 bg-secondary'}
                                    handleClick={() => setStep((step) => step === 0 ? 0 : step - 1)}>
                                Back Question
                            </Button>
                        )
                    }

                    <Button className={'mt-5'} handleClick={() => setStep(step + 1)}>
                        Next Question
                    </Button>
                </div>
            </div>
        </>
    )
}
export default LessonExerciseQuestionTemplate