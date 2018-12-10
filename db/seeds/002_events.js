
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
          image: "https://images.unsplash.com/photo-1536081905080-f14fb4d6e52d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1415&q=80",
          likes: 0
        },
        {
          id: 2,
          users_id: 1,
          title: 'Funk Night',
          category: 'Funk',
          description: 'The best funk in SF',
          date_time: '2019-02-21 22:00:00',
          location: 'San Francisco',
          image: "https://images.unsplash.com/photo-1519683109079-d5f539e1542f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          likes: 0
        },
        {
          id: 3,
          users_id: 3,
          title: 'Lil Wayne Stock',
          category: 'Hip-Hop',
          description: 'rap party',
          date_time: '2019-01-10 21:00:00',
          location: 'San Francisco',
          image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          likes: 0
        },
        {
          id: 4,
          users_id: 2,
          title: 'Snoop Dogg',
          category: 'Hip-Hop',
          description: 'Headline show',
          date_time: '2018-12-10 19:00:00',
          location: 'San Francisco',
          image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          likes: 0
        },
        {
          id: 5,
          users_id: 2,
          title: 'Mozez',
          category: 'Soul',
          description: 'All the way from the UK!',
          date_time: '2019-3-10 19:00:00',
          location: 'San Francisco',
          image: "https://images.unsplash.com/photo-1508538462346-c1704d77178b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          likes: 0
        },
        {
          id: 6,
          users_id: 2,
          title: 'Al Kent',
          category: 'House',
          description: 'Live DJ Set',
          date_time: '2018-4-05 20:00:00',
          location: 'Oakland',
          image: "https://images.unsplash.com/photo-1508538462346-c1704d77178b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          likes: 0
        },

      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"events_id_seq"', (SELECT MAX("id") FROM "events"))`
      )
    )
};
