type Props = {
  register: any;
  name: string;
  required?: boolean;
  label: string;
  value: string;
}

const Radio = ({register, name, required, label, value} : Props) => {
  return (
      <label id={'radio-'+name}>
        <input type="radio" value={value} {...register(name,{required})} required={required} />
        {label}
      </label>
  )
}

export default Radio