import Link from "next/link";
import {deleteCookie} from "cookies-next";
import {useRouter} from "next/navigation";

const Header = () => {

  const router = useRouter();

  const handleLogout = (e: any) => {
    e.preventDefault()
    deleteCookie('token',);
    deleteCookie('userid');
    router.push("/login")
  }

  return(
      <header className={'flex p-3 items-center justify-between bg-primary text-white font-bold gap-3'}>
        <div className={'flex gap-3 '}>
          <div><Link href={'/'}>Home</Link> </div>
          <div><Link href={'/lesson'}>Lesson</Link> </div>
          <div><Link href={'/practice'}>Practice</Link> </div>
        </div>
        <div className={''}>
          <div><Link href={"#"} onClick={handleLogout}>Logout</Link></div>
        </div>
      </header>
  )
}
export default Header