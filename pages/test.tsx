import {Practice, Question, QuestionContent} from "@/types/common";
import QuestionContentMultipleChoice from "@/molecules/QuestionContentMultipleChoice";
import DefaultLayout from "@/templates/DefaultLayout";
import PracticeTimeoutTemplate from "@/templates/PracticeTimeoutTemplate";
import axios from "axios";
import {getCookie} from "cookies-next";
import {logout} from "@/util/help";

const Test = ({practice} : {practice : Practice}) => {
  console.log("practice",practice)
  return(
    <DefaultLayout>
      <PracticeTimeoutTemplate practice={practice} />
    </DefaultLayout>
  )
}
export default Test

export async function getServerSideProps({req,res,params} : any) {
  const data : any = await axios.get(process.env.NEXT_PUBLIC_APP_BE+'/api/practice/1',{
    headers: {
      "Authorization" : "Bearer "+getCookie('token',{req,res})
    }
  }).then((res)=>res).catch((e)=>{
    if(e.response.status === 401) {
      logout({req,res})
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      }
    }
  })
  return {
    props: {
      practice: data?.data?.data || null,
    },
  }
}