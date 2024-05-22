import { findEventById } from "../data/CRUD"


export async function eventos(id) {

    const result = await findEventById(id)

    return result
}