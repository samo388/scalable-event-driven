const kafka = require("./kafkaClient");

const consumer = kafka.consumer({ groupId: "log-group" });

const startConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "user-logs", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const log = JSON.parse(message.value.toString());

      console.log("Log received:", log);
    },
  }
);
};

module.exports = { startConsumer };
