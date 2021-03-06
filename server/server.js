const express = require("express");
const session = require("express-session");
const { v4: genuuidV4 } = require("uuid");
const MongoStore = require("connect-mongo")(session);
const bodyParser = require("body-parser");
const { MongoClient, ObjectID } = require("mongodb");

const app = express();
const port = 3001;

const jsonBodyParser = bodyParser.json();

// mongodb constants
const url = "";
const dbName = "online_shopping";

// instance
const client = new MongoClient(url, {
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

/////////////////////////////////////////////// collections //////////////////////////////////////////////

const createDatabase = async (client) => {
  const db = client.db(dbName);

  try {
    await db.createCollection("customers", { autoIndexId: true });
    console.log("[MongoDB]: customers collection created.");

    await db.createCollection("products", { autoIndexId: true });
    console.log("[MongoDB]: products collection created.");

    await db.createCollection("cases", { autoIndexId: true });
    console.log("[MongoDB]: cases collection created.");

    console.log("[MongoDB]: database created");
  } catch (err) {
    console.log(err);
  }
};

/////////////////////////////////////////////// middleware //////////////////////////////////////////////

const checkAccountExists = async (req, res, next) => {
  const promise = new Promise((resolve, reject) => {
    client
      .db(dbName)
      .collection("customers")
      .findOne({ email: req.body.email }, (err, customer) => {
        if (err) {
          console.log(err);
        } else {
          resolve(customer ? true : false);
        }
      });
  });

  promise.then((accExists) => {
    if (!accExists) {
      next();
    } else {
      res.sendStatus(409);
    }
  });
};

/////////////////////////////////////////////// endpoints //////////////////////////////////////////////

app.use(
  session({
    name: "_session",
    secret: "this needs to be an environment variable",
    resave: false,
    saveUninitialized: false,
    genid: () => genuuidV4(),
    cookie: { maxAge: 60000 * 60, sameSite: "strict" }, // 1 hour
    store: new MongoStore({
      url: url,
      dbName: dbName,
    }),
  })
);

app.post("/api/register", jsonBodyParser, checkAccountExists, (req, res) => {
  client
    .db(dbName)
    .collection("customers")
    .insertOne(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      },
      (err) => {
        if (err) {
          console.log("[MongoDB]:", err.message);
        } else {
          res.sendStatus(201);
        }
      }
    );
});

app.post("/api/login", jsonBodyParser, (req, res) => {
  client
    .db(dbName)
    .collection("customers")
    .findOne(
      { email: req.body.email, password: req.body.password },
      (err, user) => {
        if (err) {
          console.log("[MongoDB]:", err.message);
        } else {
          if (user) {
            delete user.password;
            req.session.user = user;
            res.status(200).json({
              sid: req.session.id,
              user: {
                id: user._id,
                name: `${user.firstName} ${user.lastName}`,
              },
              status: 200,
            });
          } else {
            res.status(401).json({ status: 401 });
          }
        }
      }
    );
});

app.get("/api/logout", (req, res) => {
  req.session.destroy();
  res.clearCookie("_session");
  res.sendStatus(204);
});

app.post("/api/session", jsonBodyParser, (req, res) => {
  client
    .db(dbName)
    .collection("sessions")
    .findOne({ _id: req.body.sid }, (err, session) => {
      if (err) {
        console.log("[MongoDB]:", err.message);
      } else {
        if (session) {
          res.status(200).json({ expired: false });
        } else {
          res.status(401).json({ expired: true });
        }
      }
    });
});

app.get("/api/components", (req, res) => {
  client
    .db(dbName)
    .collection("products")
    .find({})
    .toArray((err, result) => {
      if (err) {
        console.log("[MongoDB]:", err.message);
      } else {
        res.json(result);
      }
    });
});

app.get(`/api/components/:type`, (req, res) => {
  client
    .db(dbName)
    .collection("products")
    .find(req.params)
    .toArray((err, result) => {
      if (err) {
        console.log("[MongoDB]:", err.message);
      } else {
        res.json(result);
      }
    });
});

app.get("/api/product/:name", (req, res) => {
  client
    .db(dbName)
    .collection("products")
    .findOne({ name: req.params.name }, (err, result) => {
      if (err) {
        console.log("[MongoDB]:", err.message);
      } else {
        return res.json(result);
      }
    });
});

app.get("/api/products/:name", (req, res) => {
  const re = new RegExp(req.params.name, `i`);

  client
    .db(dbName)
    .collection("products")
    .find({ name: re })
    .toArray((err, result) => {
      if (err) {
        console.log("[MongoDB]:", err.message);
      } else {
        res.json(result);
      }
    });
});

app.post("/api/reviews", jsonBodyParser, (req, res) => {
  const { productID } = req.body;
  const { id, name } = req.body.user;
  const { title, text, rating } = req.body.review;
  const parsedRating = parseFloat(rating).toFixed(1);
  client
    .db(dbName)
    .collection("products")
    .updateOne(
      { _id: ObjectID(productID) }, // ObjectId() required to work
      {
        //pushes/adds a review item to reviews array.
        $push: {
          reviews: {
            _id: new ObjectID(),
            customerID: id,
            customerName: name,
            title: title,
            text: text,
            rating: parsedRating,
            datePosted: new Date(),
            helpfulCount: {
              yes: 0,
              no: 0,
            },
          },
        },
      },
      (err) => {
        if (err) {
          console.log("[MongoDB]:", err.message);
        } else {
          res.sendStatus(201);
        }
      }
    );
});

app.get("/api/reviews/:productID", (req, res) => {
  const { productID } = req.params;
  console.log("id", productID);
  client
    .db(dbName)
    .collection("products")
    .findOne({ _id: ObjectID(productID) }, (err, product) => {
      if (err) {
        console.log("[MongoDB]:", err.message);
      } else {
        const { reviews } = product;
        res.json(reviews);
      }
    });
});

app.put(
  "/api/products/:productID/reviews/:reviewID",
  jsonBodyParser,
  (req, res) => {
    const { productID, reviewID } = req.params;

    const update = () => {
      if (req.body.helpfulCount) {
        const key = Object.keys(req.body.helpfulCount)[0];
        const value = Object.values(req.body.helpfulCount)[0];
        return {
          $set: {
            ["reviews.$.helpfulCount." + key]: value,
          },
        };
      } else {
        // user edited their review so update
        let obj = {};
        Object.entries(req.body).forEach(([key, value]) => {
          obj = { ...obj, ["reviews.$." + key]: value };
        });

        obj = { ...obj, "reviews.$.datePosted": new Date() };

        return { $set: obj };
      }
    };
    const updateQuery = update();

    client
      .db(dbName)
      .collection("products")
      .updateOne(
        {
          _id: ObjectID(productID),
          reviews: { $elemMatch: { _id: ObjectID(reviewID) } },
        },
        updateQuery,
        (err) => {
          if (err) {
            console.log("[MongoDB]:", err.message);
          } else {
            res.sendStatus(200);
          }
        }
      );
  }
);

app.get("/api/cases", (req, res) => {
  client
    .db(dbName)
    .collection("cases")
    .find({})
    .toArray((err, result) => {
      if (err) {
        console.log("[MongoDB]:", err.message);
      } else {
        res.json(result);
      }
    });
});

app.get(`/api/search`, (req, res) => {
  const re = new RegExp(req.query.q, "i"); // the i represents case insensitive in regex

  client
    .db(dbName)
    .collection("products")
    .find({ name: re })
    .toArray((err, result) => {
      if (err) {
        console.log("[MongoDB]:", err.message);
      } else {
        res.json(result);
      }
    });
});

setUpDatabase();

app.listen(port, () => {
  console.log("[Express]: server is running on localhost:", `${port}`);
});
