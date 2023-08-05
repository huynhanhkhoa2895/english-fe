import PracticeTemplate from "@/templates/PracticeTemplate";
import {StaticProps} from "@/types/common";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

const PracticeDetail = async ({params}: StaticProps) => {
    const practice = await getPracticeDetail(params);
    return (
        <PracticeTemplate practice={practice}/>

    )
}
export default PracticeDetail

async function getPracticeDetail(params: any) {
    const cookieStore = cookies()
    const data = await fetch(process.env.NEXT_PUBLIC_APP_BE + '/api/practice/' + params.id, {
        headers: {
            "Authorization": "Bearer " + cookieStore.get(('token' as any))?.value
        }
    }).then((res) => res.json())
        .catch((e: any) => {
            redirect('/login')
        })
    return data?.data?.data || null
}