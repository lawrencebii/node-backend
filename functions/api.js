const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

let records = [];

// initial api test route
router.get("/", (req, res) => {
  res.render("/dist/index.html", {
    title: "API-Test",
  });
});

router.get("/run", (req, res) => {
  res.send("App is running");
});

app.use(`/.netlify/functions/api`, router);
module.exports.handler = serverless(app);
