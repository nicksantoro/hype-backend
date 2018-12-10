const knex = require('./db')

const getAllEvents = () => {
  return knex('events')
}

const getEventById = (id) => {
  return knex('events')
    // .select(["title", "body", "type"])
    .where('id', id).first()
    .then(result => {
      return result;
    })
}

const createEvent = (payload) => {
  return knex('events').insert(payload).returning('*')


  // .then(result => {
  //   return knex('events')
  // })
}

const deleteEvent = (eventId) => {
  return knex('events')
    .del('*')
    .where('id', eventId)
    .then(result => {
      return knex('events')
    })
}

const updateEventById = (id, payload) => {
  return knex('events')
    .where('id', id)
    .update(payload, '*')
}

const getComments = (id) => {
  return knex('comments')
    .where('comments.events_id', id)
    .join('users', 'users.id', '=', 'comments.users_id')
}

const createComment = (payload) => {
  return knex('comments').insert(payload).returning('*');
}

const deleteComment = (id) => {
  return knex('comments')
    .del('*')
    .where('id', id)
    .then(result => {
      return result;
    })
}

const updateCommentById = (id, payload) => {
  return knex('comments')
    .where('id', id)
    .update(payload, '*')
}

// const getLike = (id) => {
//   return knex('likes')
//     .where('likes.events_id', id)
//     .join('users', 'users.id', '=', 'likes.users_id')
// }


const createLike = (id) => {
  return knex('events')
    .increment('likes', 1)
    .where('id', id)
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