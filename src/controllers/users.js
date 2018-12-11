// controller is this or is this bad, send through if good, send error if not
const jwt = require('jsonwebtoken')

const model = require('../models/users');



const getAllUsers = (req, res, next) => {
  const promise = model.getAllUsers();

  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));

  promise.catch(error => {
    next(error);
  });
}

const createUser = (req, res, next) => {
  const payload = req.body;
  const promise = model.createUser(payload);

  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));

  promise.catch(error => {
    next(error);
  });
}

const deleteUser = (req, res, next) => {
  let { userId } = req.params;
  const promise = model.deleteUser(userId);

  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));

  promise.catch(error => {
    next(error);
  });
}

const getUserById = (req, res, next) => {
  let { userId } = req.params;
  const promise = model.getUserById(userId);

  promise
    .then(result => (result.error ? next(result) : res.status(200).json(result)))
    .catch(error => {
      next(error);
    })
}

const updateUserById = (req, res, next) => {
  let payload = req.body;
  let { id } = req.params;
  const promise = model.updateUserById(id, payload);

  promise
    .then(result => (result.error ? next(result) : res.status(200).json(result)))
    .catch(error => {
      next(error);
    })
}

const getFollowers = (req, res, next) => {
  let { id } = req.params;
  const promise = model.getFollowers(id);

  promise
    .then(result => (result.error ? next(result) : res.status(200).json(result)))
    .catch(error => {
      next(error);
    })
}

const deleteFollowers = (req, res, next) => {
  let { followerId } = req.body;
  let { id } = req.params;
  const promise = model.deleteFollowers(followerId, id);

  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));

  promise.catch(error => {
    next(error);
  });
}

const login = async (req, res, next) => {
  let { password, email } = req.body
  console.log(req.body, "in the controller")
  let user = await model.getUserByEmail(email);
  if (!user) return res.status(404).json({ status: 404, message: "user email or password is invalid" })
  if (user.hash_password == password) {
    const timeIssued = Math.floor(Date.now() / 1000)
    const timeExpires = timeIssued + 86400 * 28
    let token = await jwt.sign({
      iss: 'auth_test',
      aud: 'auth_test',
      iat: timeIssued,
      exp: timeExpires,
      identity: user.id
    }, "secret")
    return res.status(200).set({ authorization: token }).json(user)
  }
  return res.status(404).json({ status: 404, message: "user email or password is invalid" })
}

//val user
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