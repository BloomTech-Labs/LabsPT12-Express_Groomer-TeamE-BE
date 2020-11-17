exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('businesses')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('businesses').insert([
        {
          user_id: '00ulthapbErVUwVJy4x6',
          name: 'Groomer Express',
          banner_photo:
            'https://imgs.smoothradio.com/images/191589?crop=16_9&width=660&relax=1&signature=Rz93ikqcAz7BcX6SKiEC94zJnqo=',
          address: '666 Rick Roll Lane, Denver CO 80314',
        },
        {
          user_id: '00ulthapbErVUwVJy4x6',
          name: 'Clean Pets',
          banner_photo:
            'https://imgs.smoothradio.com/images/191589?crop=16_9&width=660&relax=1&signature=Rz93ikqcAz7BcX6SKiEC94zJnqo=',
          address: '777 Rick Roll Lane, Denver CO 80314',
        },
      ]);
    });
};
