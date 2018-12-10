
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('likes').del()
    .then(function () {
      // Inserts seed entries
      return knex('likes').insert([
        {
          id: 1,
          users_id: 1,
          events_id: 1,
          quantity: 5
        },
        {
          id: 2,
          users_id: 1,
          events_id: 2,
          quantity: 3
        },
        {
          id: 3,
          users_id: 1,
          events_id: 3,
          quantity: 3
        },
        {
          id: 4,
          users_id: 3,
          events_id: 2,
          quantity: 10
        },
      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"likes_id_seq"', (SELECT MAX("id") FROM "likes"))`
      )
    )
};
