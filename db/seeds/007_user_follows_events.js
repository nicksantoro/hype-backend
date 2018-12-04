
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_follows_events').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_follows_events').insert([
        {
          id: 1,
          users_id: 1,
          events_id: 2
        },
        {
          id: 2,
          users_id: 2,
          events_id: 3
        },
        {
          id: 3,
          users_id: 1,
          events_id: 3
        },
        {
          id: 4,
          users_id: 3,
          events_id: 2
        },
      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"user_follows_events_id_seq"', (SELECT MAX("id") FROM "user_follows_events"))`
      )
    )
};
