const db = require('../../data/db-config');

const findAll = async () => {
  return await db('pets');
}

const findById = (id) => {
  return db('pets').where({ id });
}

const addPet = async (pet) => {
  return db('pets').insert(pet).returning('*');
}

const update = (id, pet) => {
  return db('pets')
    .where({ id: id })
    .update(pet)
    .returning('*');
}

const remove = async (id) => {
  return await db('pets').where({ id }).del()
}

module.exports = {
  findAll,
  findById,
  addPet,
  update,
  remove
};