import ExerciseVocabulary from "@/molecules/Exercise/ExerciseVocabulary";
import {useDispatch, useSelector} from "react-redux";
import {selectVocabularySelected} from "@/reducers/select";
import DefaultLayout from "@/templates/DefaultLayout";
import {useEffect, useState} from "react";
import {setSelectedVocabularyAction} from "@/reducers/vocabularyReducer";
import {useRouter} from "next/router";

const Exercise = () => {
  const selectedVocabulary = useSelector(selectVocabularySelected)
  const dispatch = useDispatch();
  const router = useRouter()

  const [hasWindow,setHasWindow] = useState<boolean>(false)

  useEffect(()=>{
    setHasWindow(true)
    if(!selectedVocabulary || !selectedVocabulary?.length) {
      router.push("/");
    }
  },[])

  useEffect(() => {
    return () => {
      hasWindow && dispatch({type: setSelectedVocabularyAction.type, payload: []})
    };
  }, [hasWindow]);
  return(
      <DefaultLayout>
        <></>
        {
          // selectedVocabulary && selectedVocabulary.length > 0 && (
          //       <ExerciseVocabulary vocabularies={selectedVocabulary || []} />
          //   )
        }
      </DefaultLayout>

  )
}
export default Exercise