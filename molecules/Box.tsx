import Image from "next/image";
import Link from "next/link";
import {Lesson, Practice} from "@/types/common";

type Props = {
  data : Lesson | Practice
  variant? : string
}

const Box = ({data, variant = "lesson"} : Props) => {

  const renderVocabulary = () => {
    if ("vocabularies" in data) {
      return <div className={'text-sm text-grey'}>Number of vocabulary: {data?.vocabularies?.length}</div>
    }
    return (
        <></>
    )
  }

  return(
    <Link href={`/${variant}/`+data.id}>
      <div className={'flex gap-3'}>
        <div>
          <Image src={`/assets/img/${variant === "lesson" ? "box-1" : "box-2" }.jpg`} className={'w-auto h-auto object-center'} width={430} height={261} alt={'box'} priority />
        </div>
        <div>
          <div><span className={'text-[36px] font-bold'}>{data.name}</span></div>
          {renderVocabulary()}
          <div className={'text-sm text-grey'}>Create At: {data.createdAt || ''}</div>
        </div>
      </div>
    </Link>

  )
}
export default Box