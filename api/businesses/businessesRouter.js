const express = require('express');
const authRequired = require('../middleware/authRequired');
const Business = require('./businessesModel');
const router = express.Router();

//Get all businesses
router.get('/', authRequired, async (req, res) => {
  try {
    const businesses = await Business.findAll();

    if (!businesses) {
      res.status(400).json({ message: 'Could not find any businesses' });
    }
    res.status(200).json(businesses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get business by business ID
router.get('/:id', authRequired, async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);

    if (!business) {
      res.status(400).json({ message: 'Could not find business by that ID' });
    }
    res.status(200).json(business);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Add a business
router.post('/', authRequired, async (req, res) => {
  try {
    const payload = req.body;
    const business = await Business.addBusiness(payload);

    if (!business) {
      res.status(400).json({ message: 'Please insert all required fields' });
    }
    res.status(200).json(business);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Edit a business
router.put('/:id', authRequired, async (req, res) => {
  try {
    const payload = req.body;
    const newBusiness = await Business.update(req.params.id, payload);

    if (!newBusiness) {
      res
        .status(400)
        .json({ message: 'Please make sure no required fields are blank' });
    }
    res.status(200).json(newBusiness);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Remove a business
router.delete('/:id', authRequired, async (req, res) => {
  try {
    const { id } = req.params;
    await Business.remove(id);

    res.status(200).json({ message: 'successfully nuked' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
