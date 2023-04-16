type Props = {
  name: string;
  label: string;
  value: string;
  onChange: any;
  required?: boolean;
  disabled?: boolean;
}

const Radio = ({name, required = false, label, value,onChange,disabled = false} : Props) => {
  return (
      <label className={'flex gap-1 items-center'} id={'radio-'+name}>
        <input type="radio" name={name} value={value} required={required} onChange={onChange} disabled={disabled} />
        <span>{label}</span>
      </label>
  )
}

export default Radio