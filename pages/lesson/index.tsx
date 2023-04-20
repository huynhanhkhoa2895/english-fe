import DefaultLayout from "@/templates/DefaultLayout";
import {Lesson} from '@/types/common'
import ListTemplate from "@/templates/ListTemplate";
import {getCookie} from "cookies-next";
const Lesson = ({lessons} : {lessons : Lesson[]}) => {
  return(
      <DefaultLayout>
        <ListTemplate data={lessons || []} />
      </DefaultLayout>
  )
}
export default Lesson

export async function getServerSideProps({req,res} : any) {
  const data = await fetch(process.env.NEXT_PUBLIC_APP_BE+'/api/lesson/',{
    headers: {
      "Authorization" : "Bearer "+getCookie('token',{req,res})
    }
  }).then((res)=>res.json()).catch((e)=>{
    console.log(e)
  })


  return {
    props: {
      lessons: data?.data || null,
    },
  }
}