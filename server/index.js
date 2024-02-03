require("dotenv").config();
// const session = require('express-session');
const keys = require("./keys");
const cookieSession = require("cookie-session");
const passportSetup = require("./passport");
const passport = require("passport");
// const authRoute = require("./app/routes/auth");
const userRoute = require('./app/routes/user.routes')
const authRoute = require('./app/routes/auth.routes')
// Express Application setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3050",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      sameSite: "none",
      secure: true, //!!SKIP FOR LOCAL ENVIRONMENTS
      maxAge: 1000 * 60 * 60 * 24 * 7, // One Week
    },
  })
);

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

// app.use(cors());

app.use(bodyParser.json());

// Postgres client setup

const db = require("./app/models");
const Role = db.role;
db.sequelize.sync();

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

// const { Pool } = require("pg");
// const pgClient = new Pool({
//   user: keys.pgUser,
//   host: keys.pgHost,
//   database: keys.pgDatabase,
//   password: keys.pgPassword,
//   port: keys.pgPort,
// });

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

// pgClient.on("connect", (client) => {
//   client.query("CREATE SEQUENCE IF NOT EXISTS user_id_seq;");
//   client
//     .query(
//       "CREATE TABLE IF NOT EXISTS values (id INT NOT NULL DEFAULT NEXTVAL('user_id_seq'), number INT, username VARCHAR(45));"
//     )
//     .catch((err) => console.log("PG ERROR", err));
// });

// pgClient.on("connect", client => {
//   client
//     .query("CREATE TABLE IF NOT EXISTS values (number INT)")
//     .catch(err => console.log("PG ERROR", err));
// });

//Express route definitions
app.get("/", (req, res) => {
  res.send("Welcome to this Simple App!");
});

// get the values
app.get("/values/all", async (req, res) => {
  const values = await pgClient.query("SELECT * FROM values");

  res.send(values);
});

// get the value byId
app.get("/values/:id", async (req, res) => {
  // console.log(`\x1b[33m DEBUG : ---> ${req.params.id} \x1b[0m`)
  const { id } = req.params;
  pgClient.query(
    "SELECT * FROM values WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
});

// now the post -> insert value
app.post("/values", async (req, res) => {
  if (!req.body.value) res.send({ working: false });
  pgClient.query("INSERT INTO values(number, username) VALUES($1, $2)", [
    req.body.value,
    req.body.username,
  ]);

  res.send({ working: true });
});

// routes
// require('./app/routes/auth.routes')(app);
// require('./app/routes/user.routes')(app);
app.use("/auth", authRoute);
app.use("/test", userRoute);

app.listen(PORT, (err) => {
  console.log(`'listening on port ${PORT}!'`);
});
