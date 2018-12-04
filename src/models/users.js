// if there is no result send an error, if there is a result that looks send to controller
// handles the logic attaches the error

const userQuery = require('../../queries/users');

const getAllUsers = () => {
  const user = userQuery.getAllUsers();
  return user.then(result => (result.length < 1 ? { error: 'error retrieving content', status: 500 } : result))
}

const createUser = (payload) => {
  const user = userQuery.createUser(payload);
  return content.then(result => (!result ? { error: 'error creating user', status: 500 } : result))
}

const deleteUser = (userId) => {
  const user = userQuery.deleteUser(userId);
  return user.then(result => (!result ? { error: 'error deleting user', status: 500 } : result))
}

const getUserById = (userId) => {
  const user = userQuery.getUserById(userId);

  return user.then(result => (!result ? { error: 'error retrieving user', status: 500 } : result))
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

const login = (email, password) => {
  const user = userQuery.login(email, password);
  return user.then(result => (!result ? { error: 'error deleting follower', status: 500 } : result));
}

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
  getUserById,
  updateUserById,
  getFollowers,
  deleteFollowers,
  login
}