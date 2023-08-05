import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {Vocabulary} from "@/types/common";

interface State {
    selectedVocabulary: Vocabulary[]
}

const initialState = {selectedVocabulary: []} as State

const slice = createSlice({
    name: 'vocabulary',
    initialState,
    reducers: {
        setSelectedVocabularyAction(state: any, action: PayloadAction<number>) {
            state.selectedVocabulary = action.payload
            return state
        },
    },
})

export const {setSelectedVocabularyAction} = slice.actions
export default slice.reducer