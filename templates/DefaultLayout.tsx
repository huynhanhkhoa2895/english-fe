import Head from "next/head";
import {ReactDOM} from "react";
import Header from "@/organisms/Header";

type Props ={
  children : ReactDOM
}

const DefaultLayout = ({children} : Props) => {
  return(
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Header />
          <div className={'container mx-auto py-5'}>
            {children}
          </div>
        </main>
      </>
  )
}
export default DefaultLayout
