import DefaultLayout from "@/templates/DefaultLayout";
import LessonDetailTemplate from "@/templates/LessonDetailTemplate";
import {Lesson} from '@/types/common'
const Lesson = ({lesson} : {lesson : Lesson}) => {
  return(
    <DefaultLayout>
      <LessonDetailTemplate lesson={lesson} />
    </DefaultLayout>
  )
}
export default Lesson

export async function getServerSideProps(context : any) {
  const data = await fetch(process.env.NEXT_PUBLIC_APP_BE+'/api/lesson/'+context.params.id).then((res)=>res.json()).catch((e)=>{
    console.log(e)
  })


  return {
    props: {
      lesson: data?.data || null,
    },
  }
}