
type Props = {
  children : JSX.Element;
  className? : string;
  handleClick? : any;
  type? : 'button' | 'submit'
}

const Button = ({children, handleClick, className = '', type = 'button'} : Props) => {
  return(
    <button onClick={handleClick} className={'bg-primary text-white text-semibold rounded-xl p-3'+className}>
      {children}
    </button>
  )
}
export default Button