import {deleteCookie, getCookie} from "cookies-next";

const setLocalStorage = () => {

}

export const logout = ({ req, res } : any) => {
  deleteCookie('token', { req, res });
  deleteCookie('userid', { req, res });
}

export const callAPIPushResult = async (data : any) => {
  const result = await fetch("/api/create-result",{
    method: "POST",
    body: JSON.stringify({data}),
    headers: {
      "Authorization": "Bearer "+getCookie("token"),
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  }).catch((e)=>e)
}