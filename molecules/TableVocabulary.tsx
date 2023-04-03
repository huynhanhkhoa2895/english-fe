import Mask from "@/molecules/Mask";
import {useState} from "react";
import Audio from "@/molecules/Audio";

type Props = {
  data : Vocabulary[]
}

const TableVocabulary = ({data} : Props) => {
  const [maskVocabularyAll,setMaskVocabularyAll] = useState(false)
  const [maskTranslateAll,setMaskTranslateAll] = useState(false)
  const RenderVocabulary : any = () => {
    return  data.map((vocabulary : Vocabulary)=> <tr key={vocabulary.id}>
      <td className={'border border-slate-300 p-2'}>
        <div className={'flex gap-1'}>
          <Mask value={vocabulary.vocabulary} haveMask={maskVocabularyAll} />
          {vocabulary.sound && <Audio src={vocabulary.sound || ''} />}
        </div>
      </td>
      <td className={'border border-slate-300 p-2'}>{vocabulary.translate && <Mask value={vocabulary.translate} haveMask={maskTranslateAll}/>}</td>
    </tr>)
  }
  return(
    <table className={'table-fixed w-full border-collapse border border-slate-400'}>
      <thead>
        <tr>
          <th className={'border border-slate-300 p-3 cursor-pointer '} onClick={()=>setMaskVocabularyAll(!maskVocabularyAll)}>Vocabulary</th>
          <th className={'border border-slate-300 p-3 cursor-pointer '} onClick={()=>setMaskTranslateAll(!maskTranslateAll)}>Translate</th>
        </tr>
      </thead>
      <tbody>
      {
        <RenderVocabulary />
      }
      </tbody>
    </table>
  )
}
export default TableVocabulary