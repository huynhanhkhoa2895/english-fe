import DefaultLayout from "@/templates/DefaultLayout";
import LessonDetailTemplate from "@/templates/LessonDetailTemplate";

const Lesson = ({lesson} : {lesson : Lesson}) => {
  return(
    <DefaultLayout>
      <LessonDetailTemplate lesson={lesson} />
    </DefaultLayout>
  )
}
export default Lesson

export async function getStaticPaths() {
  const data = await fetch(process.env.NEXT_PUBLIC_APP_BE+'/api/lesson').then((res)=>res.json()).catch((e)=>{
    console.log(e)
  })
  const paths = (data?.data || []).map((lesson : Lesson)=>({
    params: { id: lesson.id.toString() }
  }))
  return {
    paths,
    fallback: true, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context : any) {
  const data = await fetch(process.env.NEXT_PUBLIC_APP_BE+'/api/lesson/'+context.params.id).then((res)=>res.json()).catch((e)=>{
    console.log(e)
  })


  return {
    props: {
      lesson: data?.data || null,
    },
    revalidate: 60
  }
}