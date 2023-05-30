import DefaultLayout from "@/templates/DefaultLayout";
import LessonExcersiseTemplate from "@/templates/LessonExcersiseTemplate";
import {getCookie} from "cookies-next";
import {logout} from "@/util/help";

const Excercise = ({data,type} : {data: any,type : string}) => {
  return(
    <DefaultLayout>
      {data && <LessonExcersiseTemplate data={data} type={type}/>}
    </DefaultLayout>
  )
}
export default Excercise

export async function getServerSideProps({req,res,params,query} : any) {
  const handleError = () => {
    logout({req, res})
    return {
      redirect: {
        permanent: false,
        destination: "/login"
      }
    }
  }
  const data =  await fetch(process.env.NEXT_PUBLIC_APP_BE+'/api/lesson/'+params.id+(query?.type === 'timeout' ? '?type=timeout' : ''),{
    headers: {
      "Authorization" : "Bearer "+getCookie('token',{req,res})
    }
  }).then((res)=>res.json()).catch((e)=>handleError())

  return {
    props: {
      data: (query?.type === "timeout" ? data?.data : data?.data?.vocabularies) || null,
      type: query?.type || null,
    },
  }
}
