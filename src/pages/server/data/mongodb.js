const { MongoClient } = require("mongodb");
const URL = "mongodb://localhost:27017";

let client;
async function connectToMongo() {
  try {
    if (!client) {
      client = await MongoClient.connect(URL);
    }
    return client;
  } catch (err) {
    console.log(err);
  }
}

async function getMongoCollection(projetoFinalVoluntariado, events) {
  const client = await connectToMongo();
  return client.db(projetoFinalVoluntariado).collection(events);
}

module.exports = { getMongoCollection };