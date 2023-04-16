import ExerciseVocabulary from "@/molecules/ExerciseVocabulary";
import {useSelector} from "react-redux";
import {selectVocabularySelected} from "@/reducers/select";
import DefaultLayout from "@/templates/DefaultLayout";

const Exercise = () => {
  const selectedVocabulary = useSelector(selectVocabularySelected)
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