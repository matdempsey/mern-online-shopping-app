const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

// express
const app = express();
const port = 3001;

// body-parser
const jsonBodyParser = bodyParser.json();

// mongodb constants
const uri =
  "mongodb+srv://mat:J9512@matcluster-tf7iy.mongodb.net/test?retryWrites=true&w=majority";
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
            firstName: {
              bsonType: "string",
              description: "must be a string and is required",
            },
            lastName: {
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

// create collections
const createUserCollection = () => {};

// insert documents into collections
app.post("/api/users", jsonBodyParser, (req, res) => {
  console.log("inside app.post for users");
  console.log(req.body);

  // insert data into user collection
});

setUpDatabase();

app.listen(port, () => {
  console.log("im listening...");
});
