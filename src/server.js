const app = require("./app");
const { startConsumer } = require("./infrastructure/kafka/consumer");
const { connectDB } = require("./infrastructure/database/mongo");

const PORT = 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
    startConsumer();
  });
});
