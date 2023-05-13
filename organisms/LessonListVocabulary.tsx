import TableVocabulary from "@/molecules/TableVocabulary";
import useVocabulary from "@/hooks/useVocabulary";
import {Lesson} from "@/types/common";
import {useEffect, useState} from "react";

type Props = {
  lesson : Lesson
}

const LessonListVocabulary = ({lesson} : Props) => {
  const {listRandomVocabulary} = useVocabulary();
  const [firstLoad,setFirstLoad] = useState<boolean>(false);

  useEffect(()=>{
    setFirstLoad(true)
  },[])

  return(
    <>
      {firstLoad && <TableVocabulary data={listRandomVocabulary(lesson.vocabularies)}/>}
    </>
  )
}

export default LessonListVocabulary