import {createReducer} from "@reduxjs/toolkit";
import {setIndexDisplayAction} from "@/reducers/actions";

const practiceTimeoutState = {
    indexDisplay: 0
}

const practiceTimeoutReducer = createReducer(practiceTimeoutState, (builder) => {
    builder
        .addCase('setIndexDisplayAction', (state, action: any) => {
            state.indexDisplay = action.payload
            return {...state}
        })
})

export default practiceTimeoutReducer;