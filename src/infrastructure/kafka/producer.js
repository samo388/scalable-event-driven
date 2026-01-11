const kafka = require("./kafkaClient");

const producer = kafka.producer();

const sendLog = async (log) => {
  await producer.connect();

  await producer.send({
    topic: "user-logs",
    messages: [
      {
        value: JSON.stringify(log),
      },
    ],
  });

  console.log("Log sent:", log);
};

module.exports = { sendLog };
