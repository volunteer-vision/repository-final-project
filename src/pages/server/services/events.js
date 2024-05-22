import { findAllEvents } from "../data/CRUD";

export async function getAllevents() {
    const eventos = await findAllEvents();
    const arr = ["dbajs","dshahd","djlkjadl"]
    return eventos
    
}