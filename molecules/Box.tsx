import Image from "next/image";

type Props = {
  lesson : Lesson
}

const Box = ({lesson} : Props) => {
  return(
      <div className={'flex'}>
        <div>
          <Image src={'/assets/img/box-1.jpg'} alt={'box'} />
        </div>
        <div>
          <div>{lesson.name}</div>
          <div className={'text-sm text-grey'}>Number of vocabulary: {lesson.vocabularies.length}</div>
          <div className={'text-sm text-grey'}>Create At: {lesson.createdAt || ''}</div>
        </div>
      </div>
  )
}
export default Box