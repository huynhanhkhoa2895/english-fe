type Props = {
  name: string;
  label: string;
  value: string;
}

const Radio = ({name, required, label, value} : Props) => {
  return (
      <label id={'radio-'+name}>
        <input type="radio" value={value} required={required} />
        {label}
      </label>
  )
}

export default Radio