import useVocabulary from "@/hooks/useVocabulary";
import ExerciseItemVocabulary from "@/molecules/ExerciseItemVocabulary";
import {useState, Fragment, useEffect} from "react";
import Progress from "@/atoms/progress";
import Button from "@/atoms/button";
import ExcerciseResult from "@/molecules/ExcerciseResult";
import {Result, Vocabulary} from "@/types/common";
import { confirmAlert } from 'react-confirm-alert';
import {useDispatch} from "react-redux";

const ExerciseVocabulary = ({vocabularies} : {vocabularies : Vocabulary[]}) => {
  const dispatch = useDispatch();
  const {listRandomVocabulary} = useVocabulary()
  const [step,setStep] = useState<number>(0)
  const [results,setResult] = useState<Result[]>([])
  const _vocabularies = listRandomVocabulary(vocabularies)

  useEffect(() => {
    return () => {
      console.log("vao day")
      // dispatch({type: setSelectedVocabularyAction.type, payload: []})
    };
  }, []);


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
                    question_type: 'vocabulary'
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
    setStep(0)
    setResult([])
  }

  return <>
    <Progress className={'mb-5'} maxValue={_vocabularies.length} currentValue={step} />
    {
      step <= _vocabularies.length - 1 && <>
          {_vocabularies.map((vocabulary: Vocabulary, index: number) => <Fragment key={vocabulary.id}>
            {step === index && <div className={'pb-5'} >
              <ExerciseItemVocabulary key={vocabulary.id} vocabulary={vocabulary} handleResult={handleResult} />
            </div>}
          </Fragment>)}
          <Button className={'bg-amber-600 w-full'} handleClick={handleFinish}>Give up</Button>
      </>

    }
    {
        step > _vocabularies.length - 1 && <ExcerciseResult results={results} reset={reset} />
    }
    </>

}

export default ExerciseVocabulary