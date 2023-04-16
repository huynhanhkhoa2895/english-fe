import ExerciseVocabulary from "@/molecules/ExerciseVocabulary";
import {useDispatch, useSelector} from "react-redux";
import {selectVocabularySelected} from "@/reducers/select";
import DefaultLayout from "@/templates/DefaultLayout";
import {useEffect, useState} from "react";
import {setSelectedVocabularyAction} from "@/reducers/vocabularyReducer";

const Exercise = () => {
  const selectedVocabulary = useSelector(selectVocabularySelected)
  const dispatch = useDispatch();

  const [hasWindow,setHasWindow] = useState<boolean>(false)

  useEffect(()=>{
    setHasWindow(true)
  },[])

  useEffect(() => {
    return () => {
      hasWindow && dispatch({type: setSelectedVocabularyAction.type, payload: []})
    };
  }, []);
  return(
      <DefaultLayout>
        {
          selectedVocabulary && selectedVocabulary.length > 0 && (
                <ExerciseVocabulary vocabularies={selectedVocabulary || []} />
            )
        }
      </DefaultLayout>

  )
}
export default Exercise