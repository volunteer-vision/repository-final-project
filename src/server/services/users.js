import { findUserByEmail, findUserById } from "../data/CRUD"

export async function user(id) {

    const result = await findUserById(id)
    if (result == null) return result
    
    return result
}

export async function getUserByEmail(email) {

    const result = await findUserByEmail(email)
    if (result == null) return result
    
    return result
}

