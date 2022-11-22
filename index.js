"use strict";
const cors = require("cors");
const express = require("express");
const db = require("./models/index");
const bodyParser = require("body-parser");
const Router = require("./routes/index");
const swaggerUI = require("swagger-ui-express");
const docs = require('./docs');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

setTimeout(
  () =>
    db.sequelize
      .authenticate()
      .then(() => {
        db.sequelize.sync({ force: false });
        console.log(`Authenticated`);
      })
      .catch((err) => console.log(`Error occurred `, err)),
  10000
);

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs));

const port = process.env.PORT || 8080;
const dbPort = process.env.POSTGRES_PORT || 5432;

app.use("/", Router);

app.listen(port, () =>
  console.log(
    `server is listening at ${port} and database is running at ${dbPort}`
  )
);
