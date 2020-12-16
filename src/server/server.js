const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Parse requests of content-type: application / JSON
app.use(bodyParser.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//Simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Shop APPrentice" });
});

require("./routes/user.routes")(app);
// Set port, listen for requests
app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
