import { getMongoCollection } from "./mongodb"
import { ObjectId } from "mongodb"
const db = "dbVoluntariado";
const COLLECTION = "events";
const COLLECTION1 = "users";
const COLLECTION3 = "submitForm";


/////////////////////////////////////////////////////////////////////////////
/////////////////////////USER////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

export async function createUser(user) {
    const collection = await getMongoCollection(db, COLLECTION1)
    const result = await collection.insertOne(user)
    return result
}

export async function updateUser(id, newObject) {
    const collection = await getMongoCollection(db, COLLECTION1)
    const result = await collection.updateOne({ "_id": new ObjectId(String(id)) }, { $set: newObject })
    return result
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
export async function findUserByEmail(email) {
        const collection = await getMongoCollection(db, COLLECTION1);
        const result = await collection.findOne({ "email": email })
        return result
}


/////////////////////////////////////////////////////////////////////////////
/////////////////////////EVENTS//////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

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


export async function createApplication(userId, eventId, message) {

}
export async function findUserApplications(userId) {
    
}
export async function findEventApplications(eventId) {

}

export async function insertForm(data) {
    const collection = await getMongoCollection(db, COLLECTION3)
    const result = await collection.insertOne({cotent: data})
    return result.insertedId
}