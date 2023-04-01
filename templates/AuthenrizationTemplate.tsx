import {useForm} from "react-hook-form";
import useAuth from "@/hooks/useAuth";
import FormControl from "@/molecules/FormControl";
import Button from "@/atoms/button";
import {useRouter} from "next/router";
import {useState} from "react";

const AuthenticationTemplate = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const router = useRouter()
  const {login} = useAuth()
  const [isLoading,setIsLoading] = useState<boolean>(false)
  const onSubmit = async (data : any) => {
    setIsLoading(true)
    try {
      const res = await login(data.email,data.password)
      if(res){
        return router.push("/")
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
            <FormControl key={'email'} className={'w-full'} type={'email'} name={'email'} register={register} errors={errors} required />
          </div>
          <div className={'w-full'}>
            <label>Password</label>
            <FormControl key={'password'} className={'w-full'} type={'password'} name={'password'} register={register} errors={errors} required />
          </div>
          <Button type={'submit'}>Login</Button>
        </form>
      </div>
  )
}
export default AuthenticationTemplate