import axios from "axios";
import {getCookie} from "cookies-next";
import PracticeTemplate from "@/templates/PracticeTemplate";
import {Practice, StaticProps} from "@/types/common";
import DefaultLayout from "@/templates/DefaultLayout";
import {logout} from "@/util/help";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

const PracticeDetail = async ({params} : StaticProps) => {
  const practice = await getPracticeDetail(params);
  return(
      <PracticeTemplate practice={practice} />

  )
}
export default PracticeDetail

async function getPracticeDetail(params : any) {
  const cookieStore = cookies()
  const data = await fetch(process.env.NEXT_PUBLIC_APP_BE+'/api/practice/'+params.id,{
    headers: {
      "Authorization" : "Bearer "+cookieStore.get(('token' as any))?.value
    }
  }).then((res)=>res.json())
      .catch((e : any)=>{
        redirect('/login')
      })
  return data?.data?.data || null
}