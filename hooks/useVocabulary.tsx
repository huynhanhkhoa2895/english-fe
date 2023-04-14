import {useEffect, useState} from "react";
import {sampleSize} from 'lodash'
import {Lesson, Vocabulary} from "@/types/common";
const useVocabulary = (lesson : Lesson) => {
  const [listVocabulary,setListVocabulary] = useState<Vocabulary[]>(lesson?.vocabularies || [])

  useEffect(()=>{
    const newArray = sampleSize(listVocabulary,listVocabulary.length)
    setListVocabulary(newArray);
  },[lesson])

  return listVocabulary
}
export default useVocabulary