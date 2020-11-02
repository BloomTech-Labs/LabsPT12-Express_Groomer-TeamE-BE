
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('businesses').del()
    .then(function () {
      // Inserts seed entries
      return knex('businesses').insert([
        {
          user_id: "00ulthapbErVUwVJy4x6", 
          email: "groomerexpress@yahoo.com", 
          password: "groomer", 
          name: "Groomer Express", 
          profile_photo: "https://imageproxy.themaven.net//https%3A%2F%2Fedm.com%2F.image%2FMTc0NjYyNjI0ODg4MjM1Mzg2%2Fscience-of-earworms-explain-why-never-gonna-give-you-up-is-stuck-in-our-heads-30-years-later.png", 
          banner_photo: "https://imgs.smoothradio.com/images/191589?crop=16_9&width=660&relax=1&signature=Rz93ikqcAz7BcX6SKiEC94zJnqo=",
          address: "666 Rick Roll Lane, Denver CO 80314"
         },
         {
          user_id: "00ulthapbErVUwVJy4x6", 
          email: "cleanpets@yahoo.com", 
          password: "clean", 
          name: "Clean Pets", 
          profile_photo: "https://imageproxy.themaven.net//https%3A%2F%2Fedm.com%2F.image%2FMTc0NjYyNjI0ODg4MjM1Mzg2%2Fscience-of-earworms-explain-why-never-gonna-give-you-up-is-stuck-in-our-heads-30-years-later.png", 
          banner_photo: "https://imgs.smoothradio.com/images/191589?crop=16_9&width=660&relax=1&signature=Rz93ikqcAz7BcX6SKiEC94zJnqo=",
          address: "777 Rick Roll Lane, Denver CO 80314"
         }
      ]);
    });
};
