import Input from "@/atoms/Input";

const FormControl = ({register,name,errors,required,type,className='',autofocus} : any) => {
  return(
    <>
      <div className={className}><Input type={type} register={register} name={name} required={required} autofocus={autofocus} /></div>
      {errors && errors[name] && <div className={'text-red-500'}>{errors[name]?.message || 'This field is required'}</div>}
    </>
  )
}
export default FormControl