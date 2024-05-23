import { findAllEvents, findEventById } from "../data/CRUD";

export async function filterAllevents() {
    const eventos = await findAllEvents();
    return eventos.map((e) => ({
        _id: e._id,
        imagemUrl: e.imgUrl,
        location: e.location,
        organization: e.organization,
        duration: e.duration,
        objective: e.objective
}))        
}

export async function filterOneEvent(id) {
    const eventos = await findEventById(id);
    return eventos.map((e) => ({
        _id: e._id,
        commitment: e.commitment,
        effort: e.effort,
        mission: e.mission,
        specs: e.specs       
}))        
}

