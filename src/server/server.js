const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3001

// Parse requests of content-type: application / JSON
app.use(bodyParser.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//Simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Shop APPrentice" });
});

require("./routes/user.routes")(app);

  // Add headers
  app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  });
  
// Set port, listen for requests
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
})
