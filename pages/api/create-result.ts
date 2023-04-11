// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {getCookie} from "cookies-next";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
  if(req.method === "POST") {
    fetch("/api/create-result",{
      method: "POST",
      headers: {
        "Authorization": "Bearer "+getCookie("token",{req,res})
      },
      body: req.body
    })
    .then((res)=>res.json)
    .then((result)=>{
      res.status(200).json({ result });
    }).catch((error)=>{
      res.status(500).json({ error });
    })
  } else {
    res.status(400).json({ error: "Bad Method" });
  }

}
