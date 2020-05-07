const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3001;

const jsonBodyParser = bodyParser.json();

// mongodb constants
const uri =
  "mongodb+srv://mat:<password>@<cluster>-tf7iy.mongodb.net/test?retryWrites=true&w=majority";
const databaseName = "online_shopping";

// instance
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const setUpDatabase = async () => {
  try {
    //connect to cluster
    await client.connect();
    await createDatabase(client);
  } catch (err) {
    console.log(err);
  } finally {
    //client.close();
    //console.log("[MongoDB]: connection closed!");
  }
};

const createDatabase = async (client) => {
  const db = client.db(databaseName);

  try {
    await db.createCollection("users", {
      autoIndexId: true,
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["firstName", "lastName", "email", "password"],
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

app.post("/api/users", jsonBodyParser, (req, res) => {
  console.log(req.body);
  const userDetails = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  };
  console.log("user details: ", userDetails);

  client
    .db(databaseName)
    .collection("users")
    .insertOne(userDetails, (err, res) => {
      if (err) {
        console.log("[MongoDB]:", err.message);
      } else {
        console.log(
          "[MongoDB]: document has been inserted into the users collection"
        );
      }
    });
});

setUpDatabase();

app.listen(port, () => {
  console.log("[Express]: server is running on localhost:", `${port}`);
});
