import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFaceSadTear, faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import Button from "@/atoms/button";
import {Result} from "@/types/common";
import Audio from "@/molecules/Audio";

const ExcerciseResult = ({results,reset} : {results : Result[],reset : Function}) => {
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
            results.map((result: Result,index : number)=><tr key={index+result.question}>
              <td className={'border border-slate-300 p-2'}>
                <div className={'flex justify-between'}>
                  <span>{result?.question || ''}</span>
                  <Audio src={result.question.trim()+'.mp3'} />
                </div>

              </td>
              <td className={'border border-slate-300 p-2'}>{result?.answer || ''}</td>
              <td className={'border border-slate-300 p-2'}><FontAwesomeIcon icon={result?.result ? faThumbsUp : faFaceSadTear} width={15} color={result?.result ? 'green' : 'red'} /></td>
            </tr>)
          }
          </tbody>
        </table>
    )
  }
  return(
      <>
        <RenderTableResult />
        <div className={'flex mt-5'}>
          <Button handleClick={reset}>Do again</Button>
        </div>
      </>
  )
}
export default ExcerciseResult