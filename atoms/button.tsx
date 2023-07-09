'use client';

import {twMerge} from "tailwind-merge";
import {forwardRef, useImperativeHandle, useRef} from "react";

type Props = {
  children : JSX.Element | string;
  className? : string;
  handleClick? : any;
  type? : 'button' | 'submit'
  disabled?: boolean;
  size?: 'lg' | 'sm'
  round?: boolean
  variant?: 'primary' | 'secondary'
}

const Button = forwardRef(({children, handleClick, className = '', type = 'button', size = 'lg', disabled = false, round = true, variant = 'primary'} : Props,ref) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  useImperativeHandle(ref, ()=>({
    click(){
      if(buttonRef && buttonRef.current) {
        buttonRef.current?.click()
      }
    }
  }))

  const renderSize = () => {
    if(size === 'lg') {
      return 'text-white py-2 px-3'
    } else {
      return 'text-sm text-white py-1 px-2'
    }
  }

  const renderVariant = () => {
    if(variant === 'primary') {
      return 'bg-primary'
    } else {
      return 'bg-secondary'
    }
  }

  return(
    <button ref={buttonRef} onClick={handleClick}
            className={twMerge('bg-primary text-white font-semibold',round ? 'rounded-xl' : '',disabled ? 'bg-gray-500' : '',renderVariant(),renderSize(),className)}
            type={type}
            disabled={disabled}
    >
      {children}
    </button>
  )
})
export default Button