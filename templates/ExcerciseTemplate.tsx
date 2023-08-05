'use client';

import {useDispatch, useSelector} from "react-redux";
import {selectVocabularySelected} from "@/reducers/select";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

const ExcerciseTemplate = () => {
    const selectedVocabulary = useSelector(selectVocabularySelected)
    const dispatch = useDispatch();
    const router = useRouter()

    useEffect(() => {
        if (!selectedVocabulary || !selectedVocabulary?.length) {
            router.push("/");
        }
    }, [])

    return (
        <></>
    )
}
export default ExcerciseTemplate