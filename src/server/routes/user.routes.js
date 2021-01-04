module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  // Create a new User
  app.post("/users", users.create);

  // Retrieve all Users
  app.get("/users", users.findAll);

  // Retrieve a single User with email
  app.get("/users/:email", users.findOne);

  // Update a User with userName
  app.put("/users/:userName", users.update);

  // Delete a User with userName
  app.delete("/users/:userName", users.delete);

  // Create a new User
  app.delete("/users", users.deleteAll);
};
