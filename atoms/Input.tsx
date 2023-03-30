type Props = {
  className: string
  name: string
  register: any
}

const Input = ({className,name,register} : Props) => {
  return(
    <input
      className={'py-3 px-3'}
      {...register}
    />
  )
}
export default Input