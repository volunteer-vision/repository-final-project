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


export async function updateDataUser({id, fullName, email, skills, linkedin}) { 
    console.log(id, fullName, email, skills, linkedin)
    const collection = await getMongoCollection(db, COLLECTION1);
    const result = await collection.updateOne({
        _id: new ObjectId(String(id))
    },
        {
            $set: {
                fullName: fullName,
                email: email,
                skills: skills,
                linkedin: linkedin
            }
        })
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

export async function searchEvent(value) {
    console.log("value", value)
    const collection = await getMongoCollection(db, COLLECTION)
    const result = await collection.find({ $and: [{ $or: [{ "location": String(value) }, { "organization": String(value) }] }] }).toArray();
    console.log("dgfdgfdgfdgfd", result)
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
    const result = await collection.insertOne(data)
    return result.insertedId
}