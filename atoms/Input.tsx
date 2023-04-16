import {useEffect, useRef, useState} from "react";

type Props = {
  className?: string
  name: string;
  required?: boolean;
  type?:string;
  autofocus?:boolean
  onChange: any;
  disabled?: boolean;
}

const Input = ({className = '',name,type='text',autofocus = false,onChange,disabled} : Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(()=>{
    if(autofocus && inputRef.current) {
      if ("focus" in inputRef.current) {
        inputRef.current.focus()
      }
    }
  },[])

  return(
    <input
      ref={inputRef}
      name={name}
      type={type}
      className={'py-1 px-2 border border-gray-500 rounded-lg w-full '+className}
      onChange={onChange}
      disabled={disabled}
    />
  )
}
export default Input