const db = require('../../data/db-config');

const findAll = async () => {
  return await db('pets');
}

const findBy = (filter) => {
  return db('pets').where({ filter });
}

const findByUserId = async (user_id) => {
  return db('pets').where({ user_id }).select('*');
}

const addPet = async (pet) => {
  return db('pets').insert(pet).returning('*');
}

const update = (id, pet) => {
  return db('pets')
    .where({ id: id })
    .first()
    .update(pet)
    .returning('*');
}

const remove = async (id) => {
  return await db('pets').where({ id }).del()
}

module.exports = {
  findAll,
  findBy,
  findByUserId,
  addPet,
  update,
  remove
};