import { findUserById } from "../data/CRUD"

export async function user(id) {

    const result = await findUserById(id)
    if (result == null) return result

    return result.map((e) => {
        return {
            name: e.name,
            age: e.age,
            email: e.email,
            password: e.password,
            skills: e.skills,
            linkedin: e.linkedin,
            cv: e.cv
        }
    })
}

