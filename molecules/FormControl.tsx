import Input from "@/atoms/Input";
import Radio from "@/atoms/radio";
import {Controller, useForm} from 'react-hook-form';

const RenderController = ({type,name,label,valueInput,onChange,autofocus} : any) => {
  let xhtml : JSX.Element = <></>
  switch (type) {
    case "radio":
      xhtml = <Radio label={label} value={valueInput} name={name} onChange={onChange} />
      break
    default:
      xhtml = <Input type={type} name={name} autofocus={autofocus} onChange={onChange} />
      break
  }
  return xhtml
}

const FormControl = ({name,errors,required,type,className='',autofocus,label,valueInput,control} : any) => {
  return(
    <>

      <div className={className}>
          <Controller
            control={control as any}
            name={name as any}
            rules={{required} as any}
            render={({ field: { onChange, value } }) => (
                <RenderController
                    type={type}
                    name={name}
                    label={label}
                    onChange={onChange}
                    value={value}
                    autofocus={autofocus}
                    valueInput={valueInput}
                    // disable={loading}
                />
            )}

          />
      </div>
      {errors && errors[name] && <div className={'text-red'}>{errors[name]?.message || 'This field is required'}</div>}
    </>
  )
}
export default FormControl