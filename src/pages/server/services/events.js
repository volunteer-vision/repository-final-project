import { findEventById } from "../data/CRUD";

export async function getAllevents() {
    const eventos = await findEventById();
    return eventos
    
}