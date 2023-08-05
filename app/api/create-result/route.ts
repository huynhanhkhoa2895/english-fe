import {NextResponse} from 'next/server';
import {cookies} from "next/headers";

export async function POST(req: Request) {
    const body = await req.json();
    const cookieStore = cookies()
    const result = await fetch(process.env.NEXT_PUBLIC_APP_BE + "/api/submit", {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + cookieStore.get(('token' as any))?.value,
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
        .then((res) => res.json())
        .then((result) => {
            return result;
        }).catch((error) => {
            return error;
        })
    return NextResponse.json({result});
}