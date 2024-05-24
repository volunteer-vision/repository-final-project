import { createForm } from "../../server/services/submited"

export default async (req, res) => {
    const {data, eventId, userId}  = req.body
    console.log(data, eventId, userId)
      if(req.method === "POST"){
        const id = await createForm(data)

        if (!id){
            return res.status(400).json({

                message: "Não foi possivel criar",
               
            })
        }

       return res.status(200).json({id})
      }
      res.status(404).json({message:"ERROR"})


}