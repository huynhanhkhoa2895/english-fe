import ListTemplate from "@/templates/ListTemplate";
import {redirect} from 'next/navigation'
import {cookies} from 'next/headers'

async function getListLesson() {
    const cookieStore = cookies()
    const data = await fetch(process.env.NEXT_PUBLIC_APP_BE + '/api/lesson/', {
        headers: {
            "Authorization": "Bearer " + cookieStore.get(('token' as any))?.value
        }
    }).then((res) => res.json())
        .catch((e: any) => {
            redirect('/login')
        })


    return data?.data || null
}

const Lesson = async () => {
    const lessons = await getListLesson();
    return (
        <ListTemplate data={lessons || []}/>
    )
}
export default Lesson

