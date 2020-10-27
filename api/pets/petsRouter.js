const express = require('express');
const authRequired = require('../middleware/authRequired');
const Pets = require('./petsModel');
const router = express.Router();

// Get all pets
router.get('/', authRequired, async (req, res) => {
  try {
    const pets = await Pets.findAll();

    res.status(200).json(pets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get pet by pet_id
router.get('/:id', authRequired, async (req, res) => {
  try {
    const pet = await Pets.findById(req.params.id);

    if (!pet) {
      res.status(404).json({
        message: "Couldn't find a pet with that ID",
      });
    }
    res.status(200).json(pet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Add a pet
router.post('/', authRequired, async (req, res) => {
  try {
    const pet = req.body;

    const addedPet = await Pets.addPet(pet);

    if (!pet) {
      res.status(400).json({ message: 'Please include all required fields' });
    }
    res.status(200).json(addedPet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Edit a pet
router.put('/:id', authRequired, async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;

    if (!payload) {
      return res.status(400).json({ message: 'Please include all fields' });
    }

    res.json(await Pets.update(id, payload));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Remove a pet
router.delete('/:id', authRequired, async (req, res) => {
  try {
    const { id } = req.params;

    await Pets.remove(id);

    res.status(200).json({ message: 'successfully nuked' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
