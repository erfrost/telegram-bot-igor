const express = require("express");
const routes = require("./routes");

const app = express();

app.use("/images", express.static("../images"));

app.use("/api", routes);

async function start() {
  try {
    app.listen(8080, () => {
      console.log(`Server has been started on port: ${8080}`);
    });
  } catch (error) {
    process.exit(1);
  }
}

start();
