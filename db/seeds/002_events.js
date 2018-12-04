
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {
          id: 1,
          users_id: 1,
          title: 'Wayne Stock',
          category: 'Rock',
          description: 'The best rock festival in the USA',
          date_time: '2018-12-29 19:00:00',
          location: 'San Francisco',
        },
        {
          id: 2,
          users_id: 1,
          title: 'Funk Night',
          category: 'Funk',
          description: 'The best funk in SF',
          date_time: '2019-02-21 22:00:00',
          location: 'San Francisco',
        },
        {
          id: 3,
          users_id: 3,
          title: 'Lil Wayne Stock',
          category: 'Hip-Hop',
          description: 'rap party',
          date_time: '2019-01-10 21:00:00',
          location: 'San Francisco',
        },
        {
          id: 4,
          users_id: 2,
          title: 'Snoop Dogg',
          category: 'Hip-Hop',
          description: 'Headline show',
          date_time: '2018-12-10 19:00:00',
          location: 'San Francisco',
        },

      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"events_id_seq"', (SELECT MAX("id") FROM "events"))`
      )
    )
};
