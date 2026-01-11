const { Kafka } = require("kafkajs");

const brokers = process.env.KAFKA_BROKERS
  ? process.env.KAFKA_BROKERS.split(",")
  : ["localhost:9092"];

const kafka = new Kafka({
  clientId: "log-service",
  brokers,
});

module.exports = kafka;
