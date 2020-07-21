const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3001;

const jsonBodyParser = bodyParser.json();

// mongodb constants
const uri =
  "mongodb+srv://mat:<password>@matCluster-tf7iy.mongodb.net/test?retryWrites=true&w=majority";
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
    await db.createCollection("customers", {
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

            // embedded document for orders
          },
        },
      },
    });
    console.log("[MongoDB]: customers collection created.");

    await db.createCollection("components", {
      autoIndexId: true,
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["name", "type", "qty", "price"],
          properties: {
            name: {
              bsonType: "string",
              description: "must be a string and is required",
            },
            type: {
              enum: [
                "Motherboard",
                "Processor",
                "Graphics Card",
                "Memory",
                "Storage",
                "Power Supply",
                "Operating System",
              ],
            },
            description: {
              bsonType: "string",
            },

            qty: {
              bsonType: "int",
            },

            price: {
              bsonType: "double",
            },
          },
        },
      },
    });
    console.log("[MongoDB]: components collection created.");

    await client.db(databaseName).createCollection("cases", {
      autoIndexId: true,
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: [
            "name",
            "width",
            "height",
            "depth",
            "formFactor",
            "colour",
            "maxGraphicsCardLength",
            "suitability",
            "description",
            "qty",
            "price",
          ],
          properties: {
            name: {
              bsonType: "string",
            },
            width: {
              bsonType: "string",
            },
            height: {
              bsonType: "string",
            },
            depth: {
              bsonType: "string",
            },
            formFactor: {
              enum: ["ATX", "Micro ATX", "Mini ITX"],
            },
            colour: {
              bsonType: "string",
            },
            maxGraphicsCardLength: {
              bsonType: "string",
            },
            suitability: {
              enum: ["Office", "Gaming", "Office & Gaming"],
            },
            description: {
              bsonType: "string",
            },
            qty: {
              bsonType: "int",
            },
            price: {
              bsonType: "double",
            },
          },
        },
      },
    });
    console.log("[MongoDB]: cases collection created.");
    console.log("[MongoDB]: database created");
  } catch (err) {
    console.log(err);
  }
};

// request section

app.post("/api/customers", jsonBodyParser, (req, res) => {
  const customerDetails = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  };

  // not working - need to fix
  let r;
  const accExist = client
    .db(databaseName)
    .collection("customers")
    .findOne({ email: customerDetails.email }, (err, result) => {
      if (err) {
        console.log("[MongoDB]:", err.message);
      } else {
        r = result !== null ? true : false;
      }
      console.log("r = ", r);
      return r;
    });

  console.log("accExist value = ", accExist); // undefined
  if (accExist) {
    res.json({ matchFound: true });
  } else {
    client
      .db(databaseName)
      .collection("customers")
      .insertOne(customerDetails, (err) => {
        if (err) {
          console.log("[MongoDB]:", err.message);
        } else {
          console.log(
            "[MongoDB]: document has been inserted into the customers collection"
          );
        }
      });
  }
});

app.post("/api/login", jsonBodyParser, (req, res) => {
  const logInDetails = {
    email: req.body.email,
    password: req.body.password,
  };

  client
    .db(databaseName)
    .collection("customers")
    .findOne(logInDetails, (err, result) => {
      if (err) {
        console.log("[MongoDB]:", err.message);
      } else {
        //console.log("[MongoDB]: login findOne result =", result);
        result === null
          ? res.json({ matchFound: false })
          : res.json({ matchFound: true });
      }
    });
});

app.get("/api/components", (req, res) => {
  client
    .db(databaseName)
    .collection("components")
    .find({})
    .toArray((err, result) => {
      if (err) {
        console.log("[MongoDB]:", err.message);
      } else {
        //console.log("[MongoDB]: component find result =", result);
        res.json(result);
      }
    });
});

app.get("/api/cases", (req, res) => {
  client
    .db(databaseName)
    .collection("cases")
    .find({})
    .toArray((err, result) => {
      if (err) {
        console.log("[MongoDB]:", err.message);
      } else {
        console.log("[MongoDB]: cases find result =", result);
        res.json(result);
      }
    });
});

app.get(`/api/search/`, (req, res) => {
  const re = new RegExp(req.query.q, "i"); // the i represents case insensitive in regex

  client
    .db(databaseName)
    .collection("components")
    .find({ name: re })
    .toArray((err, result) => {
      if (err) {
        console.log("[MongoDB]:", err.message);
      } else {
        console.log("[MongoDB]: search find result =", result);
        res.json(result);
      }
    });
});

setUpDatabase();

app.listen(port, () => {
  console.log("[Express]: server is running on localhost:", `${port}`);
});
