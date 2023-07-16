import {Fragment, useEffect, useMemo, useState} from "react";
import {InterviewQuestion, Vocabulary} from "@/types/common";
import useVocabulary from "@/hooks/useVocabulary";
import RowVocabulary from "@/molecules/TableVocabulary/RowVocabulary";


type Props = {
  data : Vocabulary[],
}

const TableVocabulary = ({data} : Props) => {
  const [maskVocabularyAll,setMaskVocabularyAll] = useState(false)
  const [maskTranslateAll,setMaskTranslateAll] = useState(true)
  const [maskDefineAll,setMaskDefineAll] = useState(true)
  const [maskExampleAll,setExampleDefineAll] = useState(true)
  const [isFirst,setIsFirst] = useState<boolean>(true)
  const [isMobile,setIsMobile] = useState<boolean>(false)
  const {listRandomData} = useVocabulary();
  const [_data,setData] = useState<any>(listRandomData(data))
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
        <RowVocabulary
            key={key}
            vocabulary={vocabulary}
            maskVocabularyAll={maskVocabularyAll}
            maskTranslateAll={maskTranslateAll}
            maskDefineAll={maskDefineAll}
            maskExampleAll={maskExampleAll}
            isMobile={isMobile}
        />
    )
  },[maskVocabularyAll,maskTranslateAll,maskDefineAll,maskExampleAll,isMobile])

  return(
      <>
        {
          !isFirst &&  <table className={'table-fixed w-full border-collapse border border-slate-400'}>
            <thead>
            <tr>
              <th className={'border border-slate-300 p-3 cursor-pointer lg:w-[200px]'} onClick={()=>setMaskVocabularyAll(!maskVocabularyAll)}>Vocabulary</th>
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