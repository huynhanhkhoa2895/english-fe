import DefaultLayout from "@/templates/DefaultLayout";
import LessonTemplate from "@/templates/LessonTemplate";

export default function Home({lessons}: { lessons: Lesson[] }) {
  return (
    <DefaultLayout>
      <LessonTemplate lessons={lessons} />
    </DefaultLayout>
  );
}

export async function getStaticProps({req,res}) {
  const data = await fetch(process.env.NEXT_PUBLIC_APP_BE+'/api/lesson').then((res)=>res.json()).catch((e)=>{
    console.log(e)
  })

  return {
    props: {
      lessons: data?.data || [],
    },
  }
}