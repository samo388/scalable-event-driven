const kafka = require("./kafkaClient");

const producer = kafka.producer();

const sendLog = async (log) => {
  try {
    await producer.connect();

    await producer.send({
      topic: "user-logs",
      messages: [
        {
          value: JSON.stringify(log),
        },
      ],
    });

    console.log("Log sent to Kafka");
  } catch (err) {
    console.error("Error sending log to Kafka", err);
  }
};

module.exports = { sendLog };
