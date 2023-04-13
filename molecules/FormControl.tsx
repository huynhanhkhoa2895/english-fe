import Input from "@/atoms/Input";
import Radio from "@/atoms/radio";



const FormControl = ({name,errors,required,type,className='',autofocus,label,value} : any) => {

  const RenderController = () => {
    const xhtml = <></>
    switch (type) {
      case "radio":
        break
      default:
        break
    }
    return(
      <Controller
        key={key}
        control={control as any}
        name={field.name as any}
      >

      </Controller>
    )
  }

  return(
    <>

      <div className={className}>
        <RenderController />
        {
          type === "radio" ?
            <Radio label={label} value={value} name={name} required={required} /> : <Input type={type} name={name} required={required} autofocus={autofocus} />
        }
      </div>
      {errors && errors[name] && <div className={'text-red'}>{errors[name]?.message || 'This field is required'}</div>}
    </>
  )
}
export default FormControl