import { getMongoCollection } from "./mongodb"
import { ObjectId } from "mongodb"
const db = "dbVoluntariado";
const COLLECTION = "events";
const COLLECTION1 = "users"

export async function createUser(user) {
    const collection = await getMongoCollection(db, COLLECTION1)
    const result = await collection.insertOne(user)
    return result
}

export async function updateUser(user1) {
    const collection = await getMongoCollection(db, COLLECTION1)
    const result = await collection.updateOne(user1)
    return result
}

export async function findAllEvents() {
    const collection = await getMongoCollection(db, COLLECTION)
    const result = await collection.find().toArray();
    return result
}

export async function findEventById(id) {
    if (ObjectId.isValid(id)) {
        const newID = new ObjectId(String(id))
        const collection = await getMongoCollection(db, COLLECTION);
        const result = await collection.find({ "_id": newID }).toArray()

        return result
    }
    return null
}

export async function findAllUsers() {
    const collection = await getMongoCollection(db, COLLECTION1)
    const result = await collection.find().toArray();
    return result
}

export async function findUserById(id) {
    if (ObjectId.isValid(id)) {
        const newID = new ObjectId(String(id))
        const collection = await getMongoCollection(db, COLLECTION1);
        const result = await collection.find({ "_id": newID }).toArray()

        return result

    }
    return null
}
