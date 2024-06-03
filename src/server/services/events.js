import { Title } from "@mui/icons-material";
import { findAllEvents, findEventById } from "../data/CRUD";

export async function filterAllevents() {
    const eventos = await findAllEvents();
    return eventos.map((e) => ({
        _id: e._id,
        imgUrl: e.imgUrl,
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
        title: e.Title,
        commitment: e.commitment,
        effort: e.effort,
        mission: e.mission,
        specs: e.specs,
        imgUrlOffer1: e.imgUrlOffer1,       
        imgUrlOffer2: e.imgUrlOffer2       
}))        
}

