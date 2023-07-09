import {Vocabulary, VocabularyRelationship} from "@/types/common";
import Mask from "@/molecules/Mask";
import Audio from "@/molecules/Audio";
import {useState} from "react";
import Button from "@/atoms/button";

type Props = {
  vocabulary : Vocabulary,
  maskVocabularyAll : boolean
}

const CellVocabulary = ({vocabulary,maskVocabularyAll} : Props) => {
  const [showRelationship,setShowRelationship] = useState<boolean>(false)

  const RenderRelationship = () => {
    return(
        <>
          {
            vocabulary.relationship && vocabulary.relationship.length > 0 && (
                  <div className={'mt-2'}>
                    <ul>
                      {
                        vocabulary.relationship?.map((item: VocabularyRelationship,key : number)=>{
                          return(
                            <li key={key}>
                              <b>{item.vocabulary.vocabulary}</b>: {item.relationship}
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
              )
          }

        </>

    )
  }

  return(
      <>
        <div className={'flex gap-1'}>
          <Mask value={
              vocabulary.vocabulary.toLowerCase() + (vocabulary.parts_of_speech ? ` (${vocabulary.parts_of_speech})`: '') + (vocabulary.transcript ? `\n(${vocabulary.transcript})`: '')
          } haveMask={maskVocabularyAll} />
          {vocabulary.sound && <Audio src={vocabulary.sound || ''} />}
        </div>
        {
          vocabulary.relationship && vocabulary.relationship.length > 0 && (
                <Button className={'mt-2'} type={"button"} handleClick={()=>setShowRelationship((showRelationship) => !showRelationship)}>
                  Toogle Relationship
                </Button>
            )
        }

        {
          showRelationship && RenderRelationship()
        }
      </>
  )
}

export default CellVocabulary