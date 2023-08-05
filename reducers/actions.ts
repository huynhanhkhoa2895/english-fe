import {createAction} from "@reduxjs/toolkit";
import {Vocabulary} from "@/types/common";

export const setIndexDisplayAction = createAction<any, any>('setIndexDisplay', () =>
    (index: number) => ({payload: index})
);

export const setSelectedVocabularyAction = createAction<any, any>('setSelectedVocabularyAction', () =>
    (vocabularies: Vocabulary[]) => ({payload: vocabularies})
);