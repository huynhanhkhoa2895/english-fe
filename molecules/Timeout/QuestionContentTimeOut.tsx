import {twMerge} from "tailwind-merge";
import {QuestionContent, Result} from "@/types/common";
import QuestionValuesTimeOut from "@/molecules/Timeout/QuestionValuesTimeOut";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectIndexDisplay} from "@/reducers/select";
import {setIndexDisplayAction} from "@/reducers/actions";

const QuestionContentTimeOut = ({content} : {content : QuestionContent}) => {
  const indexDisplay = useSelector(selectIndexDisplay)
  const dispatch = useDispatch();
  const setIndexDisplay = (index : any)=>dispatch(setIndexDisplayAction(index))
  const [totalResult,setTotalResult] = useState<Result[]>([])

  useEffect(()=>{

  },[])

  const submitSuccess = (result,data) => {
    setIndexDisplay(indexDisplay+1)
    setTotalResult((totalResult)=>[...totalResult,...result])
  }

  return(
    <>
      <div className={twMerge('transition-all duration-300', 'opacity-100 visible')}>
        <div className={'text-[36px] text-center'}>{content.question}</div>
        <div className={'border-t border-grey-500 py-10'}>
          <QuestionValuesTimeOut
            questionContent={content}
            datas={content.values || []}
            submitSuccess={submitSuccess}
          />
        </div>
      </div>
    </>
  )
}
export default QuestionContentTimeOut