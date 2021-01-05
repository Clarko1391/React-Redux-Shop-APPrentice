module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  // Create a new User
  app.post("/users", users.create);

  // Retrieve all Users
  app.get("/users", users.findAll);

  // Retrieve a single User with name
  app.get("/users/byName/:name", users.findOneByName);

  // Retrieve a single User with email
  app.get("/users/byEmail/:email", users.findOneByEmail);

  // Update a User with userName
  app.put("/users/:userName", users.update);

  // Delete a User with userName
  app.delete("/users/:userName", users.delete);

  // Create a new User
  app.delete("/users", users.deleteAll);
};
