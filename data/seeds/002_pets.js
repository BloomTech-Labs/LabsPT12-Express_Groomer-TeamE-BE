
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pets').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('pets').insert([
        {id: 1, user_id: '00ulthapbErVUwVJy4x6', name: "Max", type: "Dog", shots: true, photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2020/07/09151754/Golden-Retriever-puppy-standing-outdoors-500x486.jpg", notes: "He's a good boy"},
        {id: 2, user_id: '00ulthapbErVUwVJy4x6', name: "Leonard", type: "Cat", shots: false, photo: "https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg", notes: "Doesn't like people, loves salmmon"}
      ]);
    });
};
