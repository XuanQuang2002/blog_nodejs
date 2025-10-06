import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://quangphamxuan61_db_user:XGTKdpEdEtLjhizD@clustertest.gasqdkf.mongodb.net/?retryWrites=true&w=majority&appName=ClusterTest";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectDB() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    return client;
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
    throw error;
  }
}

export { connectDB, client };
