import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";
import Audio from "@/molecules/Audio";

type Props = {
  value : string
  haveMask? : boolean
  sound?: string|null
}

const Mask = ({value = '', haveMask = false,sound} : Props) => {
  const [isOpen,setIsOpen] = useState(!haveMask)


  return(
    <div className={'flex items-center gap-3 w-full cursor-pointer'}>
      <div className={`flex-1 ${isOpen ? '' : 'bg-black'}`} onClick={()=>setIsOpen(!isOpen)}>{value}</div>
      {/*<div className={'cursor-pointer'} ><FontAwesomeIcon icon={faEye} width={15} onClick={()=>setIsOpen(!isOpen)}/></div>*/}
      <div><Audio src={sound || ''} /></div>
    </div>
  )
}
export default Mask