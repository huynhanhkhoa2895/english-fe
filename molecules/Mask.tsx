import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";

type Props = {
  value : string
  haveMask? : boolean
}

const Mask = ({value = '', haveMask = false} : Props) => {
  const [isOpen,setIsOpen] = useState(!haveMask)


  return(
    <div className={'flex items-center gap-3 w-full cursor-pointer'} onClick={()=>setIsOpen(!isOpen)}>
      <div className={`flex-1 ${isOpen ? '' : 'bg-black'}`}>{value}</div>
      <div className={'cursor-pointer'} ><FontAwesomeIcon icon={faEye} width={15} /></div>
    </div>
  )
}
export default Mask