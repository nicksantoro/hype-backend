// if there is no result send an error, if there is a result that looks send to controller
// handles the logic attaches the error

// fat models / skinny controllers

const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')


const userQuery = require('../../queries/users');

const getAllUsers = () => {
  const user = userQuery.getAllUsers();
  return user.then(result => (result.length < 1 ? { error: 'error retrieving content', status: 500 } : result))
}

const createUser = (payload) => {
  payload.hash_password = bcrypt.hashSync(payload.hash_password, 10)
  // $2a$10$YgH4ph6n.0a.BMowndQQxeZn0jbbEGH45oXmUG9OzpFSH/9mN8Rc2
  const user = userQuery.createUser(payload);
  // if user has been created, generate a token and respond with a token. result should be token, or user and token if included
  return user.then(result => (!result ? { error: 'error creating user', status: 500 } : result))
}

const deleteUser = (userId) => {
  const user = userQuery.deleteUser(userId);
  return user.then(result => (!result ? { error: 'error deleting user', status: 500 } : result))
}

const getUserById = (userId) => {
  const user = userQuery.getUserById(userId);
  return user.then(result => (!result ? { error: 'error retrieving user', status: 500 } : result))
}

const getUserByEmail = async (email) => {
  console.log("get user by email was called", email)
  return userQuery.getUserByEmail(email);
}

const updateUserById = (id, payload) => {
  const user = userQuery.updateUserById(id, payload);

  return user.then(result => (!result ? { error: 'error updating user', status: 500 } : result))
}

const getFollowers = (id) => {
  const user = userQuery.getFollowers(id);

  return user.then(result => (!result ? { error: 'error retrieving followers', status: 500 } : result))
}

const deleteFollowers = (followerId, followeeId) => {
  const user = userQuery.deleteFollowers(followerId, followeeId);
  return user.then(result => (!result ? { error: 'error deleting follower', status: 500 } : result))
}

const getLikes = (id) => {
  const user = userQuery.getLikes(id);

  return user.then(result => (!result ? { error: 'error retrieving likes', status: 500 } : result))
}

const login = async (email, password) => {

  const user = await userQuery.login(email);

  if (!user) throw new Error("could not find user")
  console.log("USER", user, password)
  const isValid = user.hash_password === password
  // check if isValid, if true generate a token

  // if false return the error

  if (!isValid) {
    throw new Error("password not valid")
  }

  return user;

  // how am i going to use these tokens
  // with id ?
};



module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
  getUserById,
  updateUserById,
  getFollowers,
  deleteFollowers,
  login,
  getLikes,
  getUserByEmail
}