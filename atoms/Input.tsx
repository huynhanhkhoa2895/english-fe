type Props = {
  className?: string
  register: any;
  name: string;
  required?: boolean;
  type?:string;
}

const Input = ({className,register,name,required,type='text'} : Props) => {
  return(
    <input
      type={type}
      className={'py-1 px-2 border border-gray-500 rounded-lg w-full '+className}
      {...register(name,{required})}
    />
  )
}
export default Input