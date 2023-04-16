import {setCookie} from "cookies-next";

const useAuth = () => {

  const login = (email: string,password : string) => {
    return fetch(process.env.NEXT_PUBLIC_APP_BE+"/api/login",{
      method : "POST",
      body : JSON.stringify({email,password}),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res)=>res.json()).then((data)=>{
      if(data?.token){

        setCookie("token",data.token,{maxAge: 60 * 6 * 24})
        setCookie("userid",data.id,{maxAge: 60 * 6 * 24})
        return true
      }
      return false
    }).catch(()=>{
      return false
    });
  }

  return{login}
}
export default useAuth