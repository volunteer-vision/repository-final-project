import { getAllevents } from "@/pages/server/services/CRUD";

export default async(req, res) => {
    const eventos = await getAllevents();
    if (eventos.length === 0) {
      res.status(400).json({message: "n deu"});
    }
    res.status(200).json(eventos);
  }
  
   