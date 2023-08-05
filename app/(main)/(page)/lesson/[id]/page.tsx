import LessonDetailTemplate from "@/templates/LessonDetailTemplate";
import {Lesson, StaticProps} from '@/types/common'

import {redirect} from 'next/navigation'
import {cookies} from "next/headers";

async function Lesson({params, searchParams}: StaticProps) {
    const lesson: Lesson = await getLessonDetail({params, searchParams});
    return (
        <LessonDetailTemplate lesson={lesson}/>
    )
}

export default Lesson

async function getLessonDetail({params, searchParams}: any) {
    const cookieStore = cookies()
    const query: any = searchParams
    let url = process.env.NEXT_PUBLIC_APP_BE + '/api/lesson/' + params.id;
    if (params.id === 'multiple') {
        url = process.env.NEXT_PUBLIC_APP_BE + '/api/lesson/getDetailList';
        let queryParam = '';
        if (query.id) {
            query.id.map((id: any) => {
                queryParam += `id[]=${id}&`;
            })
            url += '?' + query.id
        }

    }
    const data = await fetch(url, {
        headers: {
            "Authorization": "Bearer " + cookieStore.get(('token' as any))?.value
        }
    }).then((res) => res.json()).catch((e) => {
        return redirect('/login')
    })


    return data?.data || null
}