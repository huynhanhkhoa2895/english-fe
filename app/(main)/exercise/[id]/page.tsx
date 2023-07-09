import LessonExcersiseTemplate from "@/templates/LessonExcersiseTemplate";
import {StaticProps} from "@/types/common";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";

async function getExerciseDetail({params,searchParams} : StaticProps) {
  const cookieStore = cookies()
  const query : any = searchParams
  const data =  await fetch(process.env.NEXT_PUBLIC_APP_BE+'/api/lesson/'+params.id+(query?.type === 'timeout' ? '?type=timeout' : ''),{
    headers: {
      "Authorization" : "Bearer "+cookieStore.get(('token' as any))?.value
    }
  }).then((res)=>res.json()).catch((e)=>redirect('/login'))

  return  {
    data: (query?.type === "timeout" ? data?.data : data?.data?.vocabularies) || null,
    type: query?.type || null,
  }
}

async function ExerciseDetail ({params,searchParams}: any){
  const {data,type} = await getExerciseDetail({params,searchParams})
  return(
      <>
        {data && <LessonExcersiseTemplate data={data} type={type}/>}
      </>
  )
}
export default ExerciseDetail
