import {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import {twMerge} from "tailwind-merge";

const FillInItemAnswer = forwardRef(({value,valueChoose,onChoose} : {value: string,valueChoose : string | null,onChoose : any}, ref) => {
  const [isChoose,setChoose] = useState<boolean>(false)
  const refDiv = useRef<HTMLDivElement | null>(null)

  useEffect(()=>{
    if(valueChoose === value) {
      setChoose(true)
    } else {
      setChoose(false)
    }
  },[valueChoose])

  useImperativeHandle(ref,()=>(
      function choose(){

      }
  ))

  return(
      <div ref={refDiv} onClick={onChoose} className={twMerge('p-2 border bg-white cursor-pointer',isChoose ? 'text-blue-400' : '')}>
        {value}
      </div>
  )
})
export default FillInItemAnswer