const faker = require('faker');

const roles = ['groomer', 'user'];

const profiles = [...new Array(5)].map((i, idx) => ({
  id: idx === 0 ? '00ulthapbErVUwVJy4x6' : faker.random.alphaNumeric(20),
  avatarUrl: faker.image.avatar(),
  email: idx === 0 ? 'llama001@maildrop.cc"' : faker.internet.email(),
  name:
    idx === 0
      ? 'Test001 User'
      : `${faker.name.firstName()} ${faker.name.lastName()}`,
  role:
    idx === 0 ? 'user' : `${roles[Math.floor(Math.random() * roles.length)]}`,
  bannerUrl: faker.image.city(),
  address: faker.address.streetAddress(),
}));

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('profiles')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert(profiles);
    });
};
