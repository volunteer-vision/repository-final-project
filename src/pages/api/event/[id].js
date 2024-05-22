import { eventos } from "@/pages/server/services/eventosId";

export default async(req, res) => {
    const {id} = req.query
    const events = await eventos(id);
    if (events === null) {
        res.status(400).json({message: "id nao valido"});
    }

    if (eventos.length === 0) {
      res.status(400).json({message: "nenhum objeto encotrado"});
    }
    res.status(200).json(events);
  }