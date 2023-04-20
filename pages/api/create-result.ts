// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {getCookie} from "cookies-next";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
  if(req.method === "POST") {
    return fetch(process.env.NEXT_PUBLIC_APP_BE+"/api/receive",{
      method: "POST",
      headers: {
        "Authorization": "Bearer "+getCookie("token",{req,res}),
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    })
    .then((res)=>res.json())
    .then((result)=>{
       return res.status(200).json({ result });
    }).catch((error)=>{
      return res.status(500).json({ error });
    })
  } else {
    return res.status(400).json({ error: "Bad Method" });
  }

}
