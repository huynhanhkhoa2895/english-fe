import Mask from "@/molecules/Mask";
import {Fragment, useEffect, useMemo, useState} from "react";
import Audio from "@/molecules/Audio";
import {Vocabulary} from "@/types/common";
import {boolean} from "property-information/lib/util/types";
import useVocabulary from "@/hooks/useVocabulary";

type Props = {
  data : Vocabulary[]
}

const RenderRowVocabulary = ({vocabulary,maskVocabularyAll,maskTranslateAll,maskDefineAll,maskExampleAll,isMobile} : {
    vocabulary : Vocabulary,
    maskVocabularyAll: boolean,
    maskTranslateAll: boolean,
    maskDefineAll: boolean,
    maskExampleAll: boolean,
    isMobile: boolean,
  }
) => {
  console.log("vocabulary",vocabulary)
  return(
      <tr>
        <td className={'border border-slate-300 p-2 lg:w-[200px]'}>
          <div className={'flex gap-1'}>
            <Mask value={
                vocabulary.vocabulary.toLowerCase() + (vocabulary.parts_of_speech ? ` (${vocabulary.parts_of_speech})`: '') + (vocabulary.transcript ? `\n(${vocabulary.transcript})`: '')
            } haveMask={maskVocabularyAll} />
            {vocabulary.sound && <Audio src={vocabulary.sound || ''} />}
          </div>
        </td>
        <td className={'border border-slate-300 p-2'}>{vocabulary.translate && <Mask value={vocabulary.translate} haveMask={maskTranslateAll}/>}</td>
        {
            !isMobile && (
                <>
                  <td className={'border border-slate-300 p-2'}>{vocabulary.definition && <Mask value={vocabulary.definition} haveMask={maskDefineAll}/>}</td>
                  <td className={'border border-slate-300 p-2'}>{vocabulary.example && <Mask value={vocabulary.example} haveMask={maskExampleAll}/>}</td>
                </>
            )
        }
      </tr>
  )
}

const TableVocabulary = ({data} : Props) => {
  const [maskVocabularyAll,setMaskVocabularyAll] = useState(false)
  const [maskTranslateAll,setMaskTranslateAll] = useState(true)
  const [maskDefineAll,setMaskDefineAll] = useState(true)
  const [maskExampleAll,setExampleDefineAll] = useState(true)
  const [isFirst,setIsFirst] = useState<boolean>(true)
  const [isMobile,setIsMobile] = useState<boolean>(false)
  const {listRandomVocabulary} = useVocabulary();
  const [_data,setData] = useState<any>(listRandomVocabulary(data))
  useEffect(()=>{
    if(window){
      setIsFirst(false)
      if(window.outerWidth < 769){
        setIsMobile(true)
      }
    }
  },[])

  const RenderVocabulary : any = useMemo(() => {
    return _data && _data.map((vocabulary : Vocabulary,key : number)=>
        <RenderRowVocabulary
            key={key}
            vocabulary={vocabulary}
            maskVocabularyAll={maskVocabularyAll}
            maskTranslateAll={maskTranslateAll}
            maskDefineAll={maskDefineAll}
            maskExampleAll={maskExampleAll}
            isMobile={isMobile}
        />
    )
  },[maskVocabularyAll,maskTranslateAll,maskDefineAll,maskExampleAll])

  return(
      <>
        {
          !isFirst &&  <table className={'table-fixed w-full border-collapse border border-slate-400'}>
            <thead>
            <tr>
              <th className={'border border-slate-300 p-3 cursor-pointer w-[200px]'} onClick={()=>setMaskVocabularyAll(!maskVocabularyAll)}>Vocabulary</th>
              <th className={'border border-slate-300 p-3 cursor-pointer '} onClick={()=>setMaskTranslateAll(!maskTranslateAll)}>Translate</th>
              {
                  !isMobile && (
                      <>
                        <th className={'border border-slate-300 p-3 cursor-pointer '} onClick={()=>setMaskDefineAll(!maskDefineAll)}>Definition</th>
                        <th className={'border border-slate-300 p-3 cursor-pointer '} onClick={()=>setExampleDefineAll(!maskExampleAll)}>Example</th>
                      </>
                  )
              }
            </tr>
            </thead>
            <tbody>
            {
              RenderVocabulary
            }
            </tbody>
          </table>
        }
      </>

  )
}
export default TableVocabulary