import DefaultLayout from "@/templates/DefaultLayout";
import LessonExcersiseTemplate from "@/templates/LessonExcersiseTemplate";
import {Lesson} from "@/types/common";
import {getCookie} from "cookies-next";

const Excercise = ({lesson} : {lesson : Lesson}) => {
  return(
    <DefaultLayout>
      {lesson && <LessonExcersiseTemplate lesson={lesson}/>}
    </DefaultLayout>
  )
}
export default Excercise

export async function getServerSideProps({req,res,params} : any) {
  const data = await fetch(process.env.NEXT_PUBLIC_APP_BE+'/api/lesson/'+params.id,{
    headers: {
      "Authorization" : "Bearer "+getCookie('token',{req,res})
    }
  }).then((res)=>res.json()).catch((e)=>{
    console.log(e)
  })


  return {
    props: {
      lesson: data?.data || null,
    },
  }
}
