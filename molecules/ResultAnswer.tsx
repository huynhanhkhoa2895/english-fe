import {twMerge} from "tailwind-merge";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";

type Props = {
  status : boolean|null;
  children: JSX.Element;
  className?: string;
}

const ResultAnswer = ({status = null,children,className = ''} : Props) => {
  return(
      <>
        <div className={twMerge('p-1 lg:p-2 flex gap-3',status === null ? '' : (status ? 'bg-green' : 'bg-red'),className)}>
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