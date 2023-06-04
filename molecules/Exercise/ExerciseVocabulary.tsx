import {useState, Fragment, useEffect, memo, useMemo, forwardRef, useImperativeHandle} from "react";
import Button from "@/atoms/button";
import {Result, Vocabulary} from "@/types/common";
import { confirmAlert } from 'react-confirm-alert';
import dynamic from "next/dynamic";
import {sampleSize} from 'lodash'

const ExerciseInputVocabulary = dynamic(()=>import("@/molecules/Exercise/ExerciseInputVocabulary"),{ssr : false})

const ExerciseVocabulary = forwardRef(({vocabularies,results,step,setStep,handleResult,setData} : {vocabularies : Vocabulary[],step : number,setStep : any,results : Result[],handleResult : any,setData : any},ref) => {


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

  useImperativeHandle(ref, () => {
    return {
      handleReset(){
        reset()
      }
    };
  });

  useEffect(() => {
    setVocabulary(sampleSize(vocabularies,vocabularies.length))
  }, [vocabularies]);


  const handleFinish = () => {
    confirmAlert({
      title: 'Do you want give up ?',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            // setStep(_vocabularies.length)
            // let arr : Result[] = results;
            // for(let i = step;i < _vocabularies.length;i++){
            //   const vocabulary = _vocabularies[i]
            //   arr = [...arr,...[
            //     ({
            //       question : vocabulary.vocabulary,
            //       result: false,
            //       answer: '',
            //       correct_answer: vocabulary.vocabulary,
            //     } as Result)
            //   ]]
            // }
            // handleResult(arr)
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });

  }

  const clickResult = (result : Result) => {
    handleResult([...results, result])
    setStep((step: number)=>{
      return step+1;
    })
  }

  const reset = () => {
    const resultsFail = results.filter((item: Result)=>!item.result).map((item: Result)=>item.question)
    const vocabularies = _vocabularies.filter((vocabulary: Vocabulary)=>resultsFail.includes(vocabulary.vocabulary))
    setData(vocabularies);
    setStep(0)
    handleResult([])
  }

  const renderInputExcercise = useMemo(()=>{
    return (
        <>
          {
              displayItem && step <= _vocabularies.length - 1 && <>
                {_vocabularies.map((vocabulary: Vocabulary, index: number) => <Fragment key={vocabulary.id}>
                  {step === index && <div className={'pb-5'} >
                    <ExerciseInputVocabulary key={vocabulary.id} vocabulary={vocabulary} handleResult={clickResult} />
                  </div>}
                </Fragment>)}
              <Button className={'bg-amber-600 w-full'} handleClick={handleFinish}>Give up</Button>
            </>
          }

        </>
    )
  },[_vocabularies,displayItem,step])

  return <>

      {renderInputExcercise}
    </>

})

export default ExerciseVocabulary