import TableVocabulary from "@/molecules/TableVocabulary";
import {Lesson} from "@/types/common";
import {useEffect, useState} from "react";

type Props = {
  lesson : Lesson
}

const LessonListVocabulary = ({lesson} : Props) => {

  const [firstLoad,setFirstLoad] = useState<boolean>(false);

  useEffect(()=>{
    setFirstLoad(true)
  },[])

  return(
    <>
      {firstLoad && <TableVocabulary data={lesson.vocabularies}/>}
    </>
  )
}

export default LessonListVocabulary