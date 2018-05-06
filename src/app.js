const express = require("express");
const path = require("path");

const app = express();

app.set("port", 3000);
app.use(express.static(path.resolve(__dirname, "www")));

app.use("/", (req, resp) => {
  resp.sendFile(path.resolve(__dirname, "www/index.html"));
});

app.listen(app.get("port"), () => {
  console.log("Express server running on port " + app.get("port"));
});

module.exports = app;
