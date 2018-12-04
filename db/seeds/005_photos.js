
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('photos').del()
    .then(function () {
      // Inserts seed entries
      return knex('photos').insert([
        {
          id: 1,
          events_id: 1,
          photo: "https://images.unsplash.com/photo-1519683109079-d5f539e1542f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        },
        {
          id: 2,
          events_id: 2,
          photo: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        },
        {
          id: 3,
          events_id: 3,
          photo: "https://images.unsplash.com/photo-1536081905080-f14fb4d6e52d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1415&q=80"
        },
        {
          id: 4,
          events_id: 4,
          photo: "https://images.unsplash.com/photo-1508538462346-c1704d77178b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        }
      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"photos_id_seq"', (SELECT MAX("id") FROM "photos"))`
      )
    )
};
