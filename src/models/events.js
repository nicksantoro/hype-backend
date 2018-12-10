const eventQuery = require('../../queries/events');

const getAllEvents = () => {
  const events = eventQuery.getAllEvents();
  return events.then(result => (result.length < 1 ? { error: 'error retrieving all events', status: 500 } : result))
}

const getEventById = (id) => {
  const event = eventQuery.getEventById(id);
  return event.then(result => (!result ? { error: 'error retrieving event', status: 500 } : result))
}

const createEvent = (payload) => {
  const event = eventQuery.createEvent(payload);
  return event.then(result => (!result ? { error: 'error creating event', status: 500 } : result))
}

const deleteEvent = (id) => {
  const event = eventQuery.deleteEvent(id);
  return event.then(result => (!result ? { error: 'error deleting event', status: 500 } : result))
}

const updateEventById = (id, payload) => {
  const event = eventQuery.updateEventById(id, payload);
  return event.then(result => (!result ? { error: 'error updating event', status: 500 } : result))
}

const getComments = (id) => {
  const comments = eventQuery.getComments(id);
  return comments.then(result => (!result ? { error: 'error retrieving comments', status: 500 } : result))
}

const createComment = (payload) => {
  const comment = eventQuery.createComment(payload);
  return comment.then(result => (!result ? { error: 'error creating comment', status: 500 } : result))
}

const deleteComment = (id) => {
  const comment = eventQuery.deleteComment(id);
  return comment.then(result => (!result ? { error: 'error deleting comment', status: 500 } : result))
}

const updateCommentById = (id, payload) => {
  const comment = eventQuery.updateCommentById(id, payload);
  return comment.then(result => (!result ? { error: 'error updating comment', status: 500 } : result))
}

const createLike = (id) => {
  const like = eventQuery.createLike(id);
  return like.then(result => (!result ? { error: 'error creating like', status: 500 } : result))
}



module.exports = {
  getAllEvents,
  getEventById,
  createEvent,
  deleteEvent,
  updateEventById,
  getComments,
  createComment,
  deleteComment,
  updateCommentById,
  createLike
}