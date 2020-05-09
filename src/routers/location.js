const express = require('express');
const router = new express.Router();
const Location = require('../models/location');

router.get('/locations/:name', async (req, res) => {
  const name = req.params.name;

  try {
    const location = await Location.findOne({ name });

    if (!location) {
      return res.send(404).send();
    }

    res.status(201).send(location);
  } catch (e) {
    res.status(404).send();
  }
});

router.post('/locations/', async (req, res) => {
  const location = new Location({
      ...req.body,
  });

  try {
      await location.save();
      res.status(201).send(location);
  } catch (e) {
      res.status(400).send(e);
  }
});

router.patch('/locations/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'state', 'beds', 'positiveresidents', 'totalpositiveresidents', 'positivestaff', 'totalpositivestaff', 'symptomsin72hours'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const location = await Location.findOne({ _id: req.params.id });
        
        if (!location) {
            return res.status(404).send();
        } 

        updates.forEach((update) => location[update] = req.body[update]);
        await location.save();
        res.send(location);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.delete('/locations/:id', async (req, res) => {
    try {
        const location = await Location.findOneAndDelete({ _id: req.params.id });

        if (!location) {
            return res.send(404).send();
        }

        res.status(200).send(location);
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;