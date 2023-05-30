import DefaultLayout from "@/templates/DefaultLayout";
import LessonDetailTemplate from "@/templates/LessonDetailTemplate";
import {Lesson} from '@/types/common'
import {getCookie} from "cookies-next";
import {logout} from "@/util/help";
const Lesson = ({lesson} : {lesson : Lesson}) => {
  return(
    <DefaultLayout>
      <LessonDetailTemplate lesson={lesson} />
    </DefaultLayout>
  )
}
export default Lesson

export async function getServerSideProps({req,res,params} : any) {
  const data = await fetch(process.env.NEXT_PUBLIC_APP_BE+'/api/lesson/'+params.id,{
    headers: {
      "Authorization" : "Bearer "+getCookie('token',{req,res})
    }
  }).then((res)=>res.json()).catch((e)=>{
    logout({req, res})
    console.log(e)
    return {
      redirect: {
        permanent: false,
        destination: "/login"
      }
    }
  })


  return {
    props: {
      lesson: data?.data || null,
    },
  }
}