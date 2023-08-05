'use client';

import Header from "@/organisms/Header";
import Button from "@/atoms/button";
import {usePathname, useRouter} from "next/navigation";

type Props = {
    children: JSX.Element | string;
    isUseShadow?: boolean
}

const DefaultLayout = ({children, isUseShadow = true}: Props) => {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <>
            <Header/>
            <div className={'container mx-auto py-5 px-3'}>
                {
                    pathname !== '/' && (
                        <div className={'mb-5'}>
                            <Button handleClick={() => router.back()}>Go back</Button>
                        </div>
                    )
                }

                {
                    isUseShadow ?
                        <div className={'shadow-2xl rounded-2xl p-5'}>
                            {children}
                        </div>
                        :
                        <>{children}</>
                }


            </div>
        </>
    )
}
export default DefaultLayout
