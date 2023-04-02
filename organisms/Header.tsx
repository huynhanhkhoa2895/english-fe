import Link from "next/link";

const Header = () => {
  return(
      <header className={'flex p-3 bg-primary text-white font-bold gap-3'}>
        <div><Link href={'/'}>Home</Link> </div>
      </header>
  )
}
export default Header