const { getMongoCollection } = require("./mongodb");
const { ObjectId } = require("mongodb");
const db = "dbVoluntariado";
const COLLECTION = "events";

export async function findAllEvents() {
    const collection = await getMongoCollection(db, COLLECTION)
    const result = await collection.find().toArray();
    return result
}

export async function findEventById(id) {
    const newID = new ObjectId(String(id))
    console.log("ID:",newID)
    const collection = await getMongoCollection(db, COLLECTION);
    const result = await collection.find({"_id": newID}).toArray()
    
    return result
}


