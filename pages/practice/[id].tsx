import axios from "axios";
import {getCookie} from "cookies-next";
import PracticeTemplate from "@/templates/PracticeTemplate";
import {Practice} from "@/types/common";
import DefaultLayout from "@/templates/DefaultLayout";
import {logout} from "@/util/help";

const PracticeDetail = ({practice} : {practice : Practice}) => {
  return(
      <DefaultLayout>
        <PracticeTemplate practice={practice} />
      </DefaultLayout>

  )
}
export default PracticeDetail

export async function getServerSideProps({req,res,params} : any) {
  const data = await axios.get(process.env.NEXT_PUBLIC_APP_BE+'/api/practice/'+params.id,{
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