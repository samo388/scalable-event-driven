const app = require("./app");
const { startConsumer } = require("./infrastructure/kafka/consumer");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  startConsumer();
}
);
