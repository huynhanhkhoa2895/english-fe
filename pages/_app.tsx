import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '@/reducers'
const store = configureStore({ reducer: rootReducer })

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>;
}
