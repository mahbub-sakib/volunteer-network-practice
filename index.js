const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://mahbubsakib418:SQ93WWQojgV1Bapc@cluster0.lcqajul.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     console.log('DB new connected!!');
//     // perform actions on the collection object
//     console.log('DB new connected222!!');
//     client.close();
// });


async function run() {
    try {
        await client.connect();
        // console.log('DB new connected!!');
        const activitiesCollection = client.db('VolNetwork').collection('activities');
        const activity = { name: "child shelter", email: "abc@def.com" };
        const result = await activitiesCollection.insertOne(activity);
        console.log(`activity inserted with id: ${result.insertedId}`);
    }
    finally {

    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Running my volunteer network server');
});

app.listen(port, () => {
    console.log('volunteer network server is running');
});