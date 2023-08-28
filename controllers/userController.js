// userController.js to handle users table requests
const knex = require("knex")(require("../knexfile").development);

const createUser = async (user) => {
  try {
    return await knex("users").insert({
      name: user.name,
      username: user.username,
      email: user.email,
      password_hash: user.password_hash,
      user_type: user.user_type,
      bio: user.bio,
    });
  } catch (error) {
    console.error("Error creating the user", error);
    return error;
  }
};

const findUser = async (user) => {
  try {
    const result = await knex("users")
      .where({ username: user.username })
      .first();
    if (!result) throw new Error("User Not Found!");
    return result;
  } catch (error) {
    console.error("Error finding the user", error);
    return { code: "NOT_FOUND", message: "User Not Found!" };
  }
};

const getProfileById = async (id) => {
  try {
    const result = await knex("users").where({ id: id }).first();
    if (!result) throw new Error("User Not Found!");
    return result;
  } catch (error) {
    console.error("Error finding the user", error);
    return { code: "NOT_FOUND", message: "User Not Found!" };
  }
};

module.exports = { createUser, findUser, getProfileById };
