type Props = {
  className?: string
  register: any;
  name: string;
  required?: boolean;
}

const Input = ({className,register,name,required} : Props) => {
  return(
    <input
      className={'py-1 px-2 border border-gray-500 rounded-lg '+className}
      {...register(name,{required})}
    />
  )
}
export default Input