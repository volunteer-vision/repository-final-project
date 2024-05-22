const { getMongoCollection } = require("./mongodb");
const db = "dbVoluntariado";
const COLLECTION = "events";

export async function findAllEvents() {
    const collection = await getMongoCollection(db, COLLECTION)
    const result = await collection.find().toArray();
    return result
}