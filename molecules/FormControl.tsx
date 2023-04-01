import Input from "@/atoms/Input";

const FormControl = ({register,name,errors,required,type,className=''} : any) => {
  console.log("errors",errors,name)
  return(
    <>
      <div className={className}><Input type={type} register={register} name={name} required={required} /></div>
      {errors && errors[name] && <div className={'text-red-500'}>{errors[name]?.message || 'This field is required'}</div>}
    </>
  )
}
export default FormControl