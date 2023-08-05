'use client';
import {useEffect, useState} from "react";
import Link from "next/link";

const Recently = () => {
    const [recently, setRecently] = useState<any>({})

    useEffect(() => {
        const _storage = JSON.parse(localStorage.getItem('recently') || '{}');

        if (JSON.stringify(_storage) !== JSON.stringify(recently)) {
            setRecently(_storage)
        }
    })

    return (
        <>
            {Object.keys(recently).length > 0 && <div className={'shadow-2xl rounded-2xl p-5 mb-10'}>
                <h3 className={'text-[36px] font-bold mb-2 text-primary'}>Recently</h3>
                {
                    recently?.lesson && (
                        <div className={'flex gap-10 items-center border-2 p-5'}>
                            <div>
                                <span className={'font-bold text-[24px]'}>Lesson</span>
                            </div>
                            <div>
                                <Link className={'text-[18px]'} href={'/lesson/' + recently?.lesson?.id}>
                                    {recently?.lesson?.name}
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>}
        </>

    )
}
export default Recently