// controller is this or is this bad, send through if good, send error if not

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

const login = (req, res, next) => {
  console.log("REQ BBODY", req.body);
  let { email, password } = req.body;

  const promise = model.login(email, password);
  promise.then(result => {
    return (result.error ? next(result) : res.status(200).json(result))
  })
    .catch(error => {
      next(error);
    })
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