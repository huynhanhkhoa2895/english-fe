import DefaultLayout from "@/templates/DefaultLayout";
import ListTemplate from "@/templates/ListTemplate";
import axios from "axios";
import {getCookie} from "cookies-next";
import {Student} from "@/types/common";
import {logout} from "@/util/help";

export default function Home({student}: { student: Student }) {
  const lessons = student?.lessons
  return (
    <DefaultLayout>
      <ListTemplate data={lessons || []} />
    </DefaultLayout>
  );
}

export async function getServerSideProps({req,res} : any) {
  const data : any = await axios.get(process.env.NEXT_PUBLIC_APP_BE+'/api/student/'+getCookie('userid',{req,res}),{
    headers: {
      "Authorization" : "Bearer "+getCookie('token',{req,res})
    }
  }).then((res)=>res)
      .catch((e)=>{
        logout({req,res})
        return {
          redirect: {
            destination: '/login',
            permanent: false,
          },
        }
      })
  return {
    props: {
      student: data?.data?.data || null,
    },
  }
}