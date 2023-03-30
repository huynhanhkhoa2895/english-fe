import Image from "next/image";
import Link from "next/link";

type Props = {
  lesson : Lesson
}

const Box = ({lesson} : Props) => {
  return(
    <Link href={'/lesson/'+lesson.id}>
      <div className={'flex gap-3'}>
        <div>
          <Image src={'/assets/img/box-1.jpg'} width={500} height={400} alt={'box'} />
        </div>
        <div>
          <div><span className={'text-[36px] font-bold'}>{lesson.name}</span></div>
          <div className={'text-sm text-grey'}>Number of vocabulary: {lesson.vocabularies.length}</div>
          <div className={'text-sm text-grey'}>Create At: {lesson.createdAt || ''}</div>
        </div>
      </div>
    </Link>

  )
}
export default Box