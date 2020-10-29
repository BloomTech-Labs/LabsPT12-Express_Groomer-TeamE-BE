const express = require('express');
const authRequired = require('../middleware/authRequired');
const Profiles = require('../profile/profileModel');
const router = express.Router();

//Get client by role
router.get('/', authRequired, async (req, res) => {
  try {
    const groomers = await Profiles.findGroomers();

    res.status(200).json(groomers)

  } catch (err) {
    res.status(500).json({
      message: `Could not find groomers`
    });
  }
})

module.exports = router;