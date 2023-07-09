import LessonExcersiseTemplate from "@/templates/LessonExcersiseTemplate";
import {StaticProps} from "@/types/common";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";

const Excercise = async ({params,searchParams}: StaticProps) => {
  const {data,type} = await getExerciseDetail({params,searchParams})
  return(
      <>
        {data && <LessonExcersiseTemplate data={data} type={type}/>}
      </>
  )
}
export default Excercise

export async function getExerciseDetail({params,searchParams} : any) {
  const cookieStore = cookies()
  const query : any = searchParams
  const handleError = () => {
    return redirect('/login')
  }
  const data =  await fetch(process.env.NEXT_PUBLIC_APP_BE+'/api/lesson/'+params.id+(query?.type === 'timeout' ? '?type=timeout' : ''),{
    headers: {
      "Authorization" : "Bearer "+cookieStore.get(('token' as any))?.value
    }
  }).then((res)=>res.json()).catch((e)=>handleError())

  return  {
    data: (query?.type === "timeout" ? data?.data : data?.data?.vocabularies) || null,
    type: query?.type || null,
  }
}
