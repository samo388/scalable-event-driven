const kafka = require("./kafkaClient");
const { processLog } = require("../../domain/log/LogService");

const consumer = kafka.consumer({ groupId: "log-group" });

const startConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "user-logs", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const log = JSON.parse(message.value.toString());
      await processLog(log);
      console.log("Log processed and saved");
    },
  });
};

module.exports = { startConsumer };
