import {StaticProps} from "@/types/common";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";
import LessonExerciseVocabularyTemplate from "@/templates/LessonExerciseVocabularyTemplate";
import LessonExerciseQuestionTemplate from "@/templates/LessonExerciseQuestionTemplate";

async function getExerciseDetail({params,searchParams} : StaticProps) {
  const cookieStore = cookies()
  const query : any = searchParams
  const data =  await fetch(process.env.NEXT_PUBLIC_APP_BE+'/api/lesson/'+params.id+(query?.type === 'timeout' ? '?type=timeout' : ''),{
    headers: {
      "Authorization" : "Bearer "+cookieStore.get(('token' as any))?.value
    }
  }).then((res)=>res.json()).catch((e)=>redirect('/login'))

  let _data = null

  if(params.modules === 'vocabulary') {
    _data = (query?.type === "timeout" ? data?.data : data?.data?.vocabularies) || null
  } else {
    _data = data?.data?.interview_questions || null
  }

  return  {
    data: _data,
    type: query?.type || null,
  }
}

async function ExerciseDetail ({params,searchParams}: any){
  const {data,type} = await getExerciseDetail({params,searchParams})
  return(
      <>
        {data && (
            params.module === 'vocabulary' ?
              <LessonExerciseVocabularyTemplate data={data} type={type}/> :
                <LessonExerciseQuestionTemplate data={data} />
            )
        }
      </>
  )
}
export default ExerciseDetail
