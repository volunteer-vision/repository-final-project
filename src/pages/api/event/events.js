import { filterAllevents } from "@/server/services/events";

export default async(req, res) => {
    const eventos = await filterAllevents();
    if (eventos.length === 0) {
      res.status(400).json({message: "n deu"});
    }
    res.status(200).json(eventos);
  }
  
   