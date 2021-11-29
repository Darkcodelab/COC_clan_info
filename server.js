require("dotenv").config();

const express = require("express");
const app = express();

const moment = require("moment");

const { getClanInfo, getClanWarLog } = require("./clanDetail.js");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  let clanData = await getClanInfo("#9Q8C92UJ");
  let warLog = await getClanWarLog("#9Q8C92UJ");
  res.render("index", { data: clanData, warLog, moment });
});

app.get("/clanMember/:id", async (req, res) => {
  res.send("<h1>Coming Soon!</h1>");
});

app.listen(3000, () => console.log("Server running on port 3000"));
