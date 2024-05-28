import { searchEvent } from "@/server/data/CRUD"

export default async (req,res) => {
    // const {value} = req.query
    console.log(req.query.value)
    const valueArray = req.query.value.split("")
    const value = req.query.value.toUpperCase() !== "ONU" ? valueArray.map((e, i) => i === 0 || valueArray[i - 1] === " " ? e.toUpperCase() : e).join("") : req.query.value.toUpperCase()
    console.log(value)
    const events = await searchEvent(value)
    res.status(200).json({result: events})
}