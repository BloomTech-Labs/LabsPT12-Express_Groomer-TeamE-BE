exports.up = async (knex) => {
  await knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('profiles', function (table) {
      table.string('id').notNullable().unique().primary();
      table.string('role');
      table.string('email');
      table.string('name');
      table.string('avatarUrl');
      table.string('bannerUrl');
      table.string('address');
      table.string('clientFavorites');
      table.timestamps(true, true);
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('profiles');
};
