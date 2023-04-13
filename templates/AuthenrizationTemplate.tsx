import {useForm} from "react-hook-form";
import useAuth from "@/hooks/useAuth";
import FormControl from "@/molecules/FormControl";
import Button from "@/atoms/button";
import {useRouter} from "next/router";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const AuthenticationTemplate = () => {
  const { register, handleSubmit, watch, formState: { errors }, control } = useForm();
  const router = useRouter()
  const {login} = useAuth()
  const [result,setResult] = useState<string>("")
  const [isLoading,setIsLoading] = useState<boolean>(false)
  const onSubmit = async (data : any) => {
    setIsLoading(true)
    try {
      const res = await login(data.email,data.password)
      if(res){
        return router.push("/")
      } else {
        setResult("Login error")
      }
    }catch (e){

    }
    setIsLoading(false)
  }

  return(
      <div className={'w-full h-full max-w-[750px] max-h-[500px] border border-gray-500 rounded-3xl p-5'}>
        <form className={'flex flex-col w-full gap-3'} onSubmit={handleSubmit(onSubmit)}>
          <div className={'w-full'}>
            <label>Email</label>
            <FormControl key={'email'} className={'w-full'} type={'email'} name={'email'} control={control} required />
          </div>
          <div className={'w-full'}>
            <label>Password</label>
            <FormControl key={'password'} className={'w-full'} type={'password'} name={'password'} control={control} required />
          </div>
          <Button type={'submit'} disabled={isLoading}><>Login {isLoading && <FontAwesomeIcon icon={faSpinner} spin />}</></Button>
          {result !== '' && <p className={'text-sm text-red'}>{result}</p>}
        </form>
      </div>
  )
}
export default AuthenticationTemplate