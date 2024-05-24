import { updateUser } from "@/pages/server/data/CRUD"
import Id from "./event/[id]"

export default async(req, res) => {
    if(req.method === "POST") {
        const { message } = req.body
        const result = updateUser(req.body)
        res.status(200).json({result})
    }
}
db.movies.updateOne( { Id: "" },
{
  $set: {
    plot: "A teenage girl risks everything–including her life–when she falls in love with a vampire."
  },
  $currentDate: { lastUpdated: true }
})