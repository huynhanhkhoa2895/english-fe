"use client";

import {Provider} from "react-redux";

import {combineReducers, configureStore} from '@reduxjs/toolkit'
import rootReducer from '@/reducers'
import vocabularyReducer from "@/reducers/vocabularyReducer";
import {ReactNode} from "react";

const reducer = combineReducers({root: rootReducer, vocabulary: vocabularyReducer})
const store = configureStore({ reducer })
export function Providers({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
export default Providers
