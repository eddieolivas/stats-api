const express = require('express');
const auth = require('../middleware/auth');
const router = new express.Router();
const Location = require('../models/location');

router.get('/locations/:locationId', async (req, res) => {
  const locationId = req.params.locationId;

  try {
    const location = await Location.findOne({ locationId });

    if (!location) {
      return res.send(404).send();
    }

    $name = location.name;
    $state = location.state;
    $beds = location.beds;
    $positiveresidents = location.positiveresidents;
    $totalpositiveresidents = location.totalpositiveresidents;
    $positivestaff = location.positivestaff;
    $totalpositivestaff = location.totalpositivestaff;
    $symptomsin72hours = location.symptomsin72hours;
    $dateUpdated = location.dateUpdated;


    const response = '<div style="display: none;"><div id="covid-stats"><h3><strong>Current COVID-19 Testing Information for ' + $name + '</strong></h3><p>Data reflects current information as of ' + $dateUpdated + '.</p><ul><li>A positive test confirms evidence of the virus, but does not confirm the patient is experiencing symptoms.</li><li>A negative result indicates that a test has been administered and the result was negative for COVID-19.</li><li>Pending tests include retests of current or former positives as two negative results in consecutive days is the current standard for determining when someone is no longer positive.</li></ul></p><table><thead><tr><th>Operational Beds</th><th>Tests Pending</th><th>Tests Negative</th><th>Active Positives</th></tr></thead><tbody><tr><td>' + $beds + '</td><td>' + $positiveresidents + '</td><td>' + $totalpositiveresidents + '</td><td>' + $totalpositivestaff + '</td></tr></tbody></table></div></div>';

    res.status(201).send(response);
  } catch (e) {
    res.status(404).send();
  }
});

// router.post('/locations/', async (req, res) => {
//   const location = new Location({
//       ...req.body,
//   });

//   try {
//       await location.save();
//       res.status(201).send(location);
//   } catch (e) {
//       res.status(400).send(e);
//   }
// });

// router.patch('/locations/:id', async (req, res) => {
//     const updates = Object.keys(req.body);
//     const allowedUpdates = ['name', 'state', 'beds', 'positiveresidents', 'totalpositiveresidents', 'positivestaff', 'totalpositivestaff', 'symptomsin72hours'];
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

//     if (!isValidOperation) {
//         return res.status(400).send({ error: 'Invalid updates!' });
//     }

//     try {
//         const location = await Location.findOne({ _id: req.params.id });
        
//         if (!location) {
//             return res.status(404).send();
//         } 

//         updates.forEach((update) => location[update] = req.body[update]);
//         await location.save();
//         res.send(location);
//     } catch (e) {
//         res.status(400).send(e);
//     }
// });

// router.delete('/locations/:id', async (req, res) => {
//     try {
//         const location = await Location.findOneAndDelete({ _id: req.params.id });

//         if (!location) {
//             return res.send(404).send();
//         }

//         res.status(200).send(location);
//     } catch (e) {
//         res.status(500).send();
//     }
// });

module.exports = router;