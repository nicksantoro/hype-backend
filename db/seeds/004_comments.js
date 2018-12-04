
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          id: 1,
          users_id: 1,
          events_id: 1,
          comment: "I can't wait for this show!"
        },
        {
          id: 2,
          users_id: 1,
          events_id: 2,
          comment: "This show also looks cool!"

        },
        {
          id: 3,
          users_id: 2,
          events_id: 3,
          comment: "I'm User 2, count me in!"

        },
        {
          id: 4,
          users_id: 3,
          events_id: 1,
          comment: "Sweet!"
        }
      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"comments_id_seq"', (SELECT MAX("id") FROM "comments"))`
      )
    )
};
