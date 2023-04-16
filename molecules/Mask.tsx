import { useEffect, useState} from "react";
import Audio from "@/molecules/Audio";

type Props = {
  value : string
  haveMask? : boolean
  sound?: string|null
}

const Mask = ({value = '', haveMask = false,sound} : Props) => {
  const [isOpen,setIsOpen] = useState(!haveMask)

  const [hasWindow,setHasWindow] = useState<boolean>(false)

  useEffect(()=>{
    setHasWindow(true)
  },[])

  return(
    <div className={'flex items-center gap-3 w-full cursor-pointer'}>
      <div className={`flex-1 ${isOpen ? '' : 'bg-black'}`} onClick={()=>setIsOpen(!isOpen)}>{value}</div>
      {/*<div className={'cursor-pointer'} ><FontAwesomeIcon icon={faEye} width={15} onClick={()=>setIsOpen(!isOpen)}/></div>*/}
      {hasWindow && <div><Audio src={sound || ''} autoplay={true}/></div>}
    </div>
  )
}
export default Mask