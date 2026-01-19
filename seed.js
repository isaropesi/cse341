const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

const contacts = [
    {
        firstName: "Sarah",
        lastName: "Birch",
        email: "sarah.birch@test.com",
        favoriteColor: "Yellow",
        birthday: "12/12/2020"
    },
    {
        firstName: "Armando",
        lastName: "Perez",
        email: "armando.perez@test.com",
        favoriteColor: "Blue",
        birthday: "01/24/1990"
    },
    {
        firstName: "Joseph",
        lastName: "Ducreux",
        email: "joseph.ducreux@test.com",
        favoriteColor: "Green",
        birthday: "04/05/1985"
    }
];

const seedDB = async () => {
    if (!process.env.MONGODB_URI) {
        console.error("Please ensure your .env file has the MONGODB_URI variable set.");
        process.exit(1);
    }

    const client = new MongoClient(process.env.MONGODB_URI);

    try {
        await client.connect();
        console.log("Connected correctly to server");
        const collection = client.db().collection("contacts");

        // The instruction says "create a collection... insert documents". 
        // MongoDB creates collection automatically on insert if it doesn't exist.

        const result = await collection.insertMany(contacts);
        console.log(`${result.insertedCount} documents were inserted into the collection`);
    } catch (err) {
        console.log(err.stack);
    } finally {
        await client.close();
    }
}

seedDB();
