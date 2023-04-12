import Input from "@/atoms/Input";
import Radio from "@/atoms/radio";

const FormControl = ({register,name,errors,required,type,className='',autofocus,label,value} : any) => {
  console.log("errors",errors)
  return(
    <>
      <div className={className}>
        {
          type === "radio" ? <Radio label={label} value={value} name={name} register={register} required={required} /> : <Input type={type} register={register} name={name} required={required} autofocus={autofocus} />
        }
      </div>
      {errors && errors[name] && <div className={'text-red'}>{errors[name]?.message || 'This field is required'}</div>}
    </>
  )
}
export default FormControl