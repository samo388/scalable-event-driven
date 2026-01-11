const express = require("express");
const { sendLog } = require("./infrastructure/kafka/producer");
const { getLogs } = require("./application/logController");

const app = express();
app.use(express.json());

app.post("/log", async (req, res) => {
  await sendLog(req.body);
  res.json({ message: "Log sent" });
});

app.get("/logs", getLogs);

module.exports = app;
