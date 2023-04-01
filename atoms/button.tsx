
type Props = {
  children : JSX.Element;
  className? : string;
  handleClick? : any;
  type? : 'button' | 'submit'
  disabled: boolean
}

const Button = ({children, handleClick, className = '', type = 'button', disabled = false} : Props) => {
  return(
    <button onClick={handleClick} className={'bg-primary text-white text-semibold rounded-xl p-3'+className} type={type} disabled={disabled}>
      {children}
    </button>
  )
}
export default Button