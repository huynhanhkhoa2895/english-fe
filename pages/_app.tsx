import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import rootReducer from '@/reducers'
import vocabularyReducer from "@/reducers/vocabularyReducer";

const reducer = combineReducers({root: rootReducer, vocabulary: vocabularyReducer})

const store = configureStore({ reducer })

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <Component {...pageProps} />
    <ToastContainer />
  </Provider>;
}
