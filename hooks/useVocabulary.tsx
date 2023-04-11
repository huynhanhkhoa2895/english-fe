import {useEffect, useState} from "react";
import {sampleSize} from 'lodash'
const useVocabulary = (lesson : Lesson) => {
  const [listVocabulary,setListVocabulary] = useState<Vocabulary[]>(lesson?.vocabularies || [])

  useEffect(()=>{
    const newArray = sampleSize(listVocabulary,listVocabulary.length)
    setListVocabulary(newArray);
  },[lesson])

  return listVocabulary
}
export default useVocabulary