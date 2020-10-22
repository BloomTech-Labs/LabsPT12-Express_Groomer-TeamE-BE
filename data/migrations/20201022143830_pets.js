exports.up = async (knex) => {
  await knex.schema
    .createTable('pets', function (table) {
        table.increments('id');
        table.string('user_id').references("id").inTable('profiles').onUpdate('CASCADE').onDelete('CASCADE');
        table.string('name').notNull();
        table.string('type');
        table.boolean('shots');
        table.string('photo');
        table.string('notes');
    })
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('pets');
};
