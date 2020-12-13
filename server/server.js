const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3001;

const jsonBodyParser = bodyParser.json();

// mongodb constants
const uri = "";
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

/////////////////////////////////////////////// Models //////////////////////////////////////////////

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

/////////////////////////////////////////////// functions/middleware //////////////////////////////////////////////

const checkAccExists = (email) => {
  return new Promise((resolve, reject) => {
    client
      .db(databaseName)
      .collection("customers")
      .findOne({ email: email }, (err, result) => {
        if (err) {
          reject(err);
        } else {
          const accExists = result !== null ? true : false;
          return resolve(accExists);
        }
      });
  });
};

/////////////////////////////////////////////// endpoints //////////////////////////////////////////////

app.post("/api/customer-accounts", jsonBodyParser, async (req, res) => {
  const customerDetails = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  };

  const accExists = await checkAccExists(customerDetails.email);

  if (!accExists) {
    client
      .db(databaseName)
      .collection("customers")
      .insertOne(customerDetails, (err) => {
        if (err) {
          console.log("[MongoDB]:", err.message);
        } else {
          res.status(201).json({ status: 201 });
          console.log(
            `[MongoDB]: customer with name: ${customerDetails.firstName} ${customerDetails.lastName} has been inserted into 
            the customers collection`
          );
        }
      });
  } else {
    res.status(409).json({ status: 409 });
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
        console.log("[MongoDB]: login findOne result =", result);
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
        console.log("[MongoDB]: find all components result =", result);
        res.json(result);
      }
    });
});

app.get(`/api/components/:type`, (req, res) => {
  client
    .db(databaseName)
    .collection("components")
    .find(req.params)
    .toArray((err, result) => {
      if (err) {
        console.log("[MongoDB]:", err.message);
      } else {
        console.log(
          "[MongoDB]: find components of a specific type result =",
          result
        );
        res.json(result);
      }
    });
});

app.get("/api/products/:name", (req, res) => {
  client
    .db(databaseName)
    .collection("components")
    .findOne({ name: req.params.name }, (err, result) => {
      if (err) {
        console.log("[MongoDB]:", err.message);
      } else {
        console.log("[MongoDB]: find specific product result =", result);
        return res.json(result);
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
        console.log("[MongoDB]: find all cases result =", result);
        res.json(result);
      }
    });
});

app.get(`/api/search`, (req, res) => {
  const re = new RegExp(req.query.q, "i"); // the i represents case insensitive in regex

  client
    .db(databaseName)
    .collection("components")
    .find({ name: re })
    .toArray((err, result) => {
      if (err) {
        console.log("[MongoDB]:", err.message);
      } else {
        console.log("[MongoDB]: product search result =", result);
        res.json(result);
      }
    });
});

setUpDatabase();

app.listen(port, () => {
  console.log("[Express]: server is running on localhost:", `${port}`);
});
