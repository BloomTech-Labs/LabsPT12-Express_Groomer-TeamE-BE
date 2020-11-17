exports.up = async (knex) => {
  await knex.schema.createTable('businesses', function (table) {
    table.increments('id');
    table
      .string('user_id')
      .references('id')
      .inTable('profiles')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.string('name');
    table.string('banner_photo');
    table.string('address');
    table.string('ratings');
    table.string('description');
    table.string('phone');
    table.string('availability');
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('businesses');
};
