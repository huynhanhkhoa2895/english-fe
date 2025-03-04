'use client';

import {useForm} from "react-hook-form";
import useAuth from "@/hooks/useAuth";
import FormControl from "@/molecules/FormControl";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import {useRouter} from "next/navigation";
import {Button} from "antd";

const AuthenticationTemplate = () => {
    const {register, handleSubmit, watch, formState: {errors}, control} = useForm();
    const router = useRouter()
    const {login} = useAuth()
    const [result, setResult] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const onSubmit = async (data: any) => {
        setIsLoading(true)
        try {
            const res = await login(data.email, data.password)
            if (res) {
                return router.push("/")
            } else {
                setResult("Login error")
            }
        } catch (e) {

        }
        setIsLoading(false)
    }

    return (
        <div className={'w-full h-max max-w-[750px] max-h-[500px] border border-gray-500 rounded-3xl p-5'}>
            <form className={'flex flex-col w-full gap-3'} onSubmit={handleSubmit(onSubmit)}>
                <div className={'w-full'}>
                    <label>Email</label>
                    <FormControl key={'email'} className={'w-full'} type={'email'} name={'email'} control={control}
                                 required/>
                </div>
                <div className={'w-full'}>
                    <label>Password</label>
                    <FormControl key={'password'} className={'w-full'} type={'password'} name={'password'}
                                 control={control} required/>
                </div>
                <Button htmlType={'submit'} loading={isLoading}>Login</Button>
                {result !== '' && <p className={'text-sm text-red'}>{result}</p>}
            </form>
        </div>
    )
}
export default AuthenticationTemplate
