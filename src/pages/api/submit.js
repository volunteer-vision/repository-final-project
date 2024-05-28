import { user } from "@/server/services/users"
import { createForm } from "../../server/services/submited"

export default async (req, res) => {
    const {data, eventId, userId}  = req.body  
      if(req.method === "POST"){
        const userExists = await user(userId)
        if(!userExists){
        return res.status(404).json({message: "user não encontrado"})
        }
        
        const id = await createForm(req.body)

        if (!id){
            return res.status(400).json({
                message: "Não foi possivel criar",        
            })
        }

       return res.status(200).json({id})
      }
      res.status(404).json({message:"ERROR"})


}