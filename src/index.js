const express = require("express");
const parser = require("body-parser");
const app = express();

app.use(parser.json());

app.use("/", require("./routes/listings"));
app.set("port", process.env.PORT || 27017);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
