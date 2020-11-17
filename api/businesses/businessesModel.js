const db = require('../../data/db-config');

const findAll = () => {
  return db('businesses').select('*');
};

const findById = (id) => {
  return db('businesses').where('user_id', id).first();
};

const addBusiness = async (business) => {
  return await db('businesses').insert(business).returning('*');
};

const update = (id, business) => {
  return db('businesses').where('user_id', id).update(business).returning('*');
};

const remove = async (id) => {
  return await db('businesses').where({ id }).del();
};

module.exports = {
  findAll,
  findById,
  addBusiness,
  update,
  remove,
};
