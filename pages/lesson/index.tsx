import DefaultLayout from "@/templates/DefaultLayout";
import {Lesson} from '@/types/common'
import ListTemplate from "@/templates/ListTemplate";
import {getCookie} from "cookies-next";
import {logout} from "@/util/help";
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
      lessons: data?.data || null,
    },
  }
}