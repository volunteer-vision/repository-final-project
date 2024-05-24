import { createUser } from "@/server/data/CRUD"

export default async(req, res) => {
    if(req.method === "POST") {
        const {nome, email, password } = req.body
        const result = createUser(req.body)
        res.status(200).json({result})
    }
}
