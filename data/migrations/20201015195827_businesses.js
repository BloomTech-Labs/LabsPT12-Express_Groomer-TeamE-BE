exports.up = async (knex) => {
  await knex.schema.createTable('businesses', function (table) {
    table.increments('id');
    table
      .string('user_id')
      .references('id')
      .inTable('profiles')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.string('email').notNull().unique();
    table.string('password').notNull();
    table.string('name').notNull();
    table.string('profile_photo');
    table.string('banner_photo');
    table.string('address');
    table.string('favorites');
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('businesses');
};
