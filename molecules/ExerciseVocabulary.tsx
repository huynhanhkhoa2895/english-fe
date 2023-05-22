import {useState, Fragment, useEffect, memo, useMemo} from "react";
import Progress from "@/atoms/progress";
import Button from "@/atoms/button";
import ExcerciseResult from "@/molecules/ExcerciseResult";
import {Result, Vocabulary} from "@/types/common";
import { confirmAlert } from 'react-confirm-alert';
import dynamic from "next/dynamic";
import {sampleSize} from 'lodash'

const ExerciseItemVocabulary = dynamic(()=>import("@/molecules/ExerciseItemVocabulary"),{ssr : false})

const ExerciseVocabulary = ({vocabularies} : {vocabularies : Vocabulary[]}) => {
  const [step,setStep] = useState<number>(0)
  const [results,setResult] = useState<Result[]>([])
  const [_vocabularies,setVocabulary] = useState<Vocabulary[]>([])
  const [displayItem,setDisplayItem] = useState<boolean>(false)

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setVocabulary(sampleSize(vocabularies,vocabularies.length))
      setDisplayItem(true)
    },500)

    return () => {
      timeout && clearTimeout(timeout)
    }
  },[])

  const handleFinish = () => {
    confirmAlert({
      title: 'Do you want give up ?',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            setStep(_vocabularies.length)
            setResult((results: Result[])=>{
              let arr : Result[] = results;
              for(let i = step;i < _vocabularies.length;i++){
                const vocabulary = _vocabularies[i]
                arr = [...arr,...[
                  ({
                    question : vocabulary.vocabulary,
                    result: false,
                    answer: '',
                    correct_answer: vocabulary.vocabulary,
                  } as Result)
                ]]
              }
              return arr
            })
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });

  }

  const handleResult = (result : Result) => {
    setResult((results: Result[])=>{
      return [...results,result]
    })
    setStep((step: number)=>{
      return step+1;
    })
  }

  const reset = () => {
    const resultsFail = results.filter((item: Result)=>!item.result).map((item: Result)=>item.question)
    const vocabularies = _vocabularies.filter((vocabulary: Vocabulary)=>resultsFail.includes(vocabulary.vocabulary))
    setVocabulary(sampleSize(vocabularies,vocabularies.length))
    setStep(0)
    setResult([])
  }

  const renderItem = useMemo(()=>{
    return (
        <>
          {
              displayItem && step <= _vocabularies.length - 1 && <>
                {_vocabularies.map((vocabulary: Vocabulary, index: number) => <Fragment key={vocabulary.id}>
                  {step === index && <div className={'pb-5'} >
                    <ExerciseItemVocabulary key={vocabulary.id} vocabulary={vocabulary} handleResult={handleResult} />
                  </div>}
                </Fragment>)}
              <Button className={'bg-amber-600 w-full'} handleClick={handleFinish}>Give up</Button>
            </>

          }

        </>
    )
  },[displayItem,step])

  return <>
      <Progress className={'mb-5'} maxValue={_vocabularies.length} currentValue={step} />
      {renderItem}
      {
          step > _vocabularies.length - 1 && <ExcerciseResult results={results} reset={reset} />
      }
    </>

}

export default ExerciseVocabulary