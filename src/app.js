const express = require("express");
const { sendLog } = require("./infrastructure/kafka/producer");

const app = express();
app.use(express.json());

app.post("/log", async (req, res) => {
  await sendLog(req.body);
  res.status(200).json({ message: "Log sent to Kafka" });
}
);

module.exports = app;
