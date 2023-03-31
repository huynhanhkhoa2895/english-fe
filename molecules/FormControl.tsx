import Input from "@/atoms/Input";

const FormControl = ({register,name,errors,required} : any) => {
  console.log("errors",errors)
  return(
    <>
      <div><Input register={register} name={name} required={required} /></div>
      {errors[name] && <div className={'text-red-500'}>{errors[name]?.message || 'This field is required'}</div>}
    </>
  )
}
export default FormControl