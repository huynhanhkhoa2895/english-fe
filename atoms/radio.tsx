type Props = {
  name: string;
  label: string;
  value: string;
  onChange: any
}

const Radio = ({name, required, label, value,onChange} : Props) => {
  return (
      <label id={'radio-'+name}>
        <input type="radio" name={name} value={value} required={required} onChange={onChange} />
        {label}
      </label>
  )
}

export default Radio