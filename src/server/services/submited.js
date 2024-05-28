import { insertForm } from "../data/CRUD"

export async function createForm(data) {
    const id = await insertForm(data)
    if(id) return id
    return undefined
    
}