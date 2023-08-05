'use client';

import ExerciseVocabulary from "@/molecules/Exercise/ExerciseVocabulary";
import {Result} from "@/types/common";
import {useRef, useState} from "react";
import ExcerciseResult from "@/molecules/Exercise/ExcerciseResult";
import ExerciseTimeout from "@/molecules/Exercise/ExerciseTimeout";
import Progress from "@/atoms/progress";

const LessonExerciseVocabularyTemplate = ({data, type}: { data: any, type: string }) => {
    const [results, setResult] = useState<Result[]>([])
    const [_data, setData] = useState<any>(data)
    const [step, setStep] = useState<number>(0)
    const ref = useRef<any>()
    const refOriginData = useRef<any>(data)
    const handleResult = (results: Result[]) => {
        setResult(() => results)
    }

    const handleReset = () => {
        if (ref?.current) {
            ref.current.handleReset()
        }
    }

    const handleSetData = (data: any) => {
        if (data && data.length > 0) {
            setData(data)
        } else {
            setData(refOriginData.current)
        }
    }

    return (
        <div className={'max-w-[1440px] mx-auto'}>
            <Progress className={'mb-5'} maxValue={_data.length} currentValue={step}/>
            {
                type === "timeout" ? <ExerciseTimeout results={results} data={_data} step={step} setStep={setStep}
                                                      handleResult={handleResult}/> :
                    <ExerciseVocabulary
                        ref={ref}
                        step={step}
                        setStep={setStep}
                        results={results}
                        handleResult={handleResult}
                        vocabularies={_data}
                        setData={(data: any) => handleSetData(data)}
                    />
            }
            {step > _data.length - 1 && <ExcerciseResult results={results} reset={handleReset}/>}
        </div>
    )
}
export default LessonExerciseVocabularyTemplate