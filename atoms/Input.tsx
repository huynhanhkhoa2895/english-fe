import {useEffect, useRef, useState} from "react";

type Props = {
  className?: string
  register: any;
  name: string;
  required?: boolean;
  type?:string;
  autofocus?:boolean
}

const Input = ({className,register,name,required,type='text',autofocus = false} : Props) => {
  const { ref, ...rest } = register(name,{required});
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(()=>{
    if(autofocus && inputRef.current) {
      inputRef.current.focus()
    }
  },[])

  return(
    <input
      ref={(e)=> {
        ref(e)
        inputRef.current = e
      }}
      type={type}
      className={'py-1 px-2 border border-gray-500 rounded-lg w-full '+className}
      {...rest}
    />
  )
}
export default Input