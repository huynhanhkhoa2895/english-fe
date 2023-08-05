import TableVocabulary from "@/molecules/TableVocabulary";
import {Vocabulary} from "@/types/common";
import {useEffect, useState} from "react";

type Props = {
    vocabulary: Vocabulary[]
}

const LessonListVocabulary = ({vocabulary}: Props) => {

    const [firstLoad, setFirstLoad] = useState<boolean>(false);

    useEffect(() => {
        setFirstLoad(true)
    }, [])

    return (
        <>
            {firstLoad && <TableVocabulary data={vocabulary}/>}
        </>
    )
}

export default LessonListVocabulary