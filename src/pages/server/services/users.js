import { findUserById } from "../data/CRUD"

export async function user(id) {

    const result = await findUserById(id)
    if (result == null) return result
    
    return result
}

