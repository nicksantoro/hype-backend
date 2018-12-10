const model = require('../models/events');

const getAllEvents = (req, res, next) => {
  const promise = model.getAllEvents();

  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));

  promise.catch(error => {
    next(error);
  });
}

const getEventById = async (req, res, next) => {

  try {
    let { id } = req.params;
    const result = await model.getEventById(id);
    const comments = await model.getComments(id);
    // const photos = await model.getPhotos(id);
    result.comments = comments;
    // result.photos = photos;
    result.error ? next(result) : res.status(200).json(result)
  }
  catch (error) {
    next(error)
  }
}

const createEvent = (req, res, next) => {
  const payload = req.body;
  console.log(req.body, "payload")
  const promise = model.createEvent(payload);

  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));

  promise.catch(error => {
    next(error);
  });
}

const deleteEvent = (req, res, next) => {
  let { id } = req.params;
  const promise = model.deleteEvent(Number(id));

  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));

  promise.catch(error => {
    next(error);
  });
}

const updateEventById = (req, res, next) => {
  let payload = req.body;
  let { id } = req.params;
  const promise = model.updateEventById(id, payload);

  promise
    .then(result => (result.error ? next(result) : res.status(200).json(result)))
    .catch(error => {
      next(error);
    })
}

const createComment = (req, res, next) => {
  const payload = req.body;
  const promise = model.createComment(payload);

  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));

  promise.catch(error => {
    next(error);
  });
}

const deleteComment = (req, res, next) => {
  let { id } = req.params;
  const promise = model.deleteComment(id);

  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));

  promise.catch(error => {
    next(error);
  });
}

const updateCommentById = (req, res, next) => {
  let payload = req.body;
  let { id } = req.params;
  const promise = model.updateCommentById(id, payload);

  promise
    .then(result => (result.error ? next(result) : res.status(200).json(result)))
    .catch(error => {
      next(error);
    })
}

const createLike = (req, res, next) => {
  const payload = req.body;
  let { id } = req.params;
  const promise = model.createLike(id);

  promise.then(result => (result.error ? next(result) : res.status(200).json(result)));

  promise.catch(error => {
    next(error);
  });
}




module.exports = {
  getAllEvents,
  getEventById,
  createEvent,
  deleteEvent,
  updateEventById,
  createComment,
  deleteComment,
  updateCommentById,
  createLike
}