import {useEffect, useRef} from "react";

type Props = {
  className? : string;
  maxValue? : number;
  currentValue?: number;
}

const Progress = ({className,maxValue,currentValue} : Props) => {
  const refProcess = useRef<HTMLDivElement | null>(null)

  const calcPercent = () => {
    return Math.ceil((currentValue/maxValue)*100)
  }

  useEffect(() => {
    if(refProcess?.current){
      refProcess.current.style.width = calcPercent()+'%';
    }
  }, [currentValue]);


  return(
      <div className={'w-full h-[25px] relative bg-gray-500 rounded-xl overflow-hidden '+className}>

        <div className={'absolute h-full w-full inset-0 text-white z-10 items-center justify-center text-center'}>{calcPercent()+'%'}</div>
        <div ref={refProcess} className={'bg-primary absolute h-full transition-all duration-700 inset-0'}></div>
      </div>
  )
}
export default Progress