import useVocabulary from "@/hooks/useVocabulary";
import ExerciseItemVocabulary from "@/molecules/ExerciseItemVocabulary";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faThumbsUp,faFaceSadTear } from '@fortawesome/free-solid-svg-icons'
import Progress from "@/atoms/progress";

const ExerciseVocabulary = ({lesson} : {lesson : Lesson}) => {
  const vocabularies = useVocabulary(lesson)
  const [step,setStep] = useState<number>(0)
  const [results,setResult] = useState<VocabularyResult[]>([])

  const handleResult = (result : VocabularyResult) => {
    setResult((results: VocabularyResult[])=>{
      return [...results,result]
    })
    setStep((step: number)=>{
      return step+1;
    })
  }

  const RenderTableResult = () => {
    return(
        <table className={'table-fixed w-full border-collapse border border-slate-400'}>
          <thead>
            <tr>
              <th className={'border border-slate-300 p-3 '}>Vocabulary</th>
              <th className={'border border-slate-300 p-3 '}>Answer</th>
              <th className={'border border-slate-300 p-3 '}>Result</th>
            </tr>
          </thead>
          <tbody>
          {
            results.map((result: VocabularyResult,index : number)=><tr key={index}>
              <td className={'border border-slate-300 p-2'}>{result?.vocabulary?.vocabulary || ''}</td>
              <td className={'border border-slate-300 p-2'}>{result?.answer || ''}</td>
              <td className={'border border-slate-300 p-2'}><FontAwesomeIcon icon={result?.result ? faThumbsUp : faFaceSadTear} width={15} color={result?.result ? 'green' : 'red'} /></td>
            </tr>)
          }
          </tbody>
        </table>
    )
  }
  return <>
    <Progress className={'mb-5'} maxValue={vocabularies.length} currentValue={step} />
    {
      step <= vocabularies.length - 1 && vocabularies.map((vocabulary: Vocabulary, index: number)=> <div className={'pb-5 '+(step === index ? 'block' : 'hidden')} key={vocabulary.id}>
            <ExerciseItemVocabulary key={vocabulary.id} vocabulary={vocabulary} handleResult={handleResult} />
          </div>
      )
    }
    {
        step > vocabularies.length - 1 && <RenderTableResult />
    }
    </>

}

export default ExerciseVocabulary