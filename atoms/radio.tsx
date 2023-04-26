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
      <label className={'xl:flex xl:gap-1 xl:items-center'} id={'radio-'+name}>
        <input className={'max-xl:mr-2'} type="radio" name={name} value={value} required={required} onChange={onChange} disabled={disabled} />
        <span>{label}</span>
      </label>
  )
}

export default Radio