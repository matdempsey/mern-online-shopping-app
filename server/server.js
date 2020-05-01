const express = require("express");
const { MongoClient } = require("mongodb");

// express
const app = express();
const port = 3001;

// mongodb constants
const uri =
  "mongodb+srv://<username>:<password>@<clustername>-tf7iy.mongodb.net/test?retryWrites=true&w=majority";
const databaseName = "online_shopping";

const setUpDatabase = async () => {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    //connect to cluster
    await client.connect();
    await createDatabase(client);
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
    console.log("[MongoDB]: connection closed!");
  }
};

// create DB
// refactor
const createDatabase = async (client) => {
  const db = client.db(databaseName);

  try {
    await db.createCollection("users", {
      autoIndexId: true,
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["first_name", "last_name", "email", "password"],
          properties: {
            first_name: {
              bsonType: "string",
              description: "must be a string and is required",
            },
            last_name: {
              bsonType: "string",
              description: "must be a string and is required",
            },
            email: {
              bsonType: "string",
              description: "must be a string and is required",
            },
            password: {
              bsonType: "string",
              description: "must be a string and is required",
            },
          },
        },
      },
    });
    console.log("[MongoDB]: users collection created.");
    await db.createCollection("products", {});
    console.log("[MongoDB]: products collection created.");
  } catch (err) {
    console.log(err);
  }

  console.log("[MongoDB]: database created");
};

setUpDatabase();

app.listen(port);
