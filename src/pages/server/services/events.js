import { findAllEvents } from "../data/CRUD";

export async function getAllevents() {
    const eventos = await findAllEvents();

    return eventos.map((e) => {return {
            location: e.location,
            duration: e.duration
    }})
    
}