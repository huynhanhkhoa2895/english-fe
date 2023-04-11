import {deleteCookie} from "cookies-next";

const setLocalStorage = () => {

}

export const logout = ({ req, res } : any) => {
  deleteCookie('token', { req, res });
  deleteCookie('userid', { req, res });
}