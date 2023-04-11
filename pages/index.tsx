import DefaultLayout from "@/templates/DefaultLayout";
import ListTemplate from "@/templates/ListTemplate";
import axios from "axios";
import {getCookie} from "cookies-next";
import {Student} from "@/types/common";

export default function Home({student}: { student: Student }) {
  const lessons = student?.lessons
  return (
    <DefaultLayout>
      <ListTemplate data={lessons || []} />
    </DefaultLayout>
  );
}

export async function getServerSideProps({req,res} : any) {
  const data = await axios.get(process.env.NEXT_PUBLIC_APP_BE+'/api/student/'+getCookie('userid',{req,res}),{
    headers: {
      "Authorization" : "Bearer "+getCookie('token',{req,res})
    }
  }).then((res)=>res)
  return {
    props: {
      student: data?.data?.data || null,
    },
  }
}