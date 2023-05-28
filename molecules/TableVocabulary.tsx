import Mask from "@/molecules/Mask";
import {useState} from "react";
import Audio from "@/molecules/Audio";
import {Vocabulary} from "@/types/common";

type Props = {
  data : Vocabulary[]
}

const TableVocabulary = ({data} : Props) => {
  const [maskVocabularyAll,setMaskVocabularyAll] = useState(false)
  const [maskTranslateAll,setMaskTranslateAll] = useState(true)
  const [maskDefineAll,setMaskDefineAll] = useState(true)
  const [maskExampleAll,setExampleDefineAll] = useState(true)
  const RenderVocabulary : any = () => {
    return  data.map((vocabulary : Vocabulary)=> <tr key={vocabulary.id}>
      <td className={'border border-slate-300 p-2 w-[200px]'}>
        <div className={'flex gap-1'}>
          <Mask value={
            vocabulary.vocabulary.toLowerCase() + (vocabulary.parts_of_speech ? ` (${vocabulary.parts_of_speech})`: '')
          } haveMask={maskVocabularyAll} />
          {vocabulary.sound && <Audio src={vocabulary.sound || ''} />}
        </div>
      </td>
      <td className={'border border-slate-300 p-2'}>{vocabulary.translate && <Mask value={vocabulary.translate} haveMask={maskTranslateAll}/>}</td>
      <td className={'border border-slate-300 p-2'}>{vocabulary.definition && <Mask value={vocabulary.definition} haveMask={maskDefineAll}/>}</td>
      <td className={'border border-slate-300 p-2'}>{vocabulary.example && <Mask value={vocabulary.example} haveMask={maskDefineAll}/>}</td>
    </tr>)
  }
  return(
    <table className={'table-fixed w-full border-collapse border border-slate-400'}>
      <thead>
        <tr>
          <th className={'border border-slate-300 p-3 cursor-pointer w-[200px]'} onClick={()=>setMaskVocabularyAll(!maskVocabularyAll)}>Vocabulary</th>
          <th className={'border border-slate-300 p-3 cursor-pointer '} onClick={()=>setMaskTranslateAll(!maskTranslateAll)}>Translate</th>
          <th className={'border border-slate-300 p-3 cursor-pointer '} onClick={()=>setMaskDefineAll(!maskDefineAll)}>Definition</th>
          <th className={'border border-slate-300 p-3 cursor-pointer '} onClick={()=>setExampleDefineAll(!maskExampleAll)}>Example</th>
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