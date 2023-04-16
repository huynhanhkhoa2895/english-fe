import {twMerge} from "tailwind-merge";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";

type Props = {
  status? : boolean|null;
  children: JSX.Element;
  className?: string;
  isShowAnswer?:boolean | null;
  value?: string;
  answer?: string;
}

const ResultAnswer = ({status = null,children,className = '',isShowAnswer = null,value,answer} : Props) => {

  const renderStatus = () => {

    if(status === true) {
      return 'bg-green'
    } else {
      if(isShowAnswer && value === answer) {
        return 'bg-cyan'
      }
      return status == null ? '' : 'bg-red'
    }
  }

  return(
      <>
        <div className={twMerge('p-1 lg:p-2 flex gap-3', renderStatus(),className)}>
          <div>
            {
              children
            }
          </div>
          {
            status != null && (
                <>
                  {status ?
                      <FontAwesomeIcon icon={faCheck} width={15} className={'text-dark-green'} /> :
                      <FontAwesomeIcon icon={faTimes} width={15} className={'text-dark-red'} />
                  }
                </>
              )
          }

        </div>
      </>
  )
}
export default ResultAnswer