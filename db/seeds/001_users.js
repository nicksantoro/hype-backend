
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          first_name: 'Nick',
          last_name: 'Santoro',
          email: 'santoroe.nick@gmail.com',
          user_name: 'noro',
          hash_password: 'password',
          location: 'san francisco',
          profile_pic: "example.lcom",
          is_admin: true
        },
        {
          id: 2,
          first_name: 'Nick',
          last_name: 'Santoro',
          email: 'santoror.nick@gmail.com',
          user_name: 'oro',
          hash_password: 'password',
          location: 'san francisco',
          profile_pic: "example.lcom",
          is_admin: false
        },
        {
          id: 3,
          first_name: 'Nick',
          last_name: 'Santoro',
          email: 'santorob.nick@gmail.com',
          user_name: 'santoro',
          hash_password: 'password',
          location: 'san francisco',
          profile_pic: "example.lcom",
          is_admin: false
        },
        {
          id: 4,
          first_name: 'Nick',
          last_name: 'Santoro',
          email: 'santorop.nick@gmail.com',
          user_name: 'nisantoro',
          hash_password: 'password',
          location: 'san francisco',
          profile_pic: "example.lcom",
          is_admin: false
        },
        {
          id: 5,
          first_name: 'Nick',
          last_name: 'Santoro',
          email: 'santorog.nick@gmail.com',
          user_name: 'nicsantoro',
          hash_password: 'password',
          location: 'san francisco',
          profile_pic: "example.lcom",
          is_admin: false
        },
      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"users_id_seq"', (SELECT MAX("id") FROM "users"))`
      )
    )
};
