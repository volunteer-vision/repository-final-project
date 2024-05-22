export async function GetOneRun(eventID) {
    const collection = await GetCollection(dbName, runCollection)
    const result = await collection.findOne(new ObjectId(eventID))
    return result
}