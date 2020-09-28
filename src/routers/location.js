const express = require('express');
const auth = require('../middleware/auth');
const router = new express.Router();
const Location = require('../models/location');

router.get('/locations/:locationId', auth, async (req, res) => {
  const locationId = req.params.locationId;

  try {
    const location = await Location.findOne({ locationId });

    if (!location) {
      return res.send(404).send();
    }

    $name = location.name;
    $dateUpdated = location.dateUpdated;
    $state = location.state;
    $beds = location.beds;
    $positiveresidents = location.positiveresidents;
    $admittedcovid = location.admittedcovid;
    $totalpositiveresidents = location.totalpositiveresidents;
    $positivestaff = location.positivestaff;
    $totalpositivestaff = location.totalpositivestaff;
    $symptomsin72hours = location.symptomsin72hours;
    $open = location.open;

    const response = '<div style="display: none;"><aside id="covid-stats"><h3><strong>Current COVID-19 Testing Information for ' + $name + '</strong></h3><p>Data reflects current information as of ' + $dateUpdated + '.</p><ul><li>A positive test confirms evidence of the virus, but does not confirm the patient is experiencing symptoms.</li><li>Open visitation is subject to change based on today\'s testing.</ul><p><strong>Mitigating Factors</strong></p><ul><li>Enhanced infection control precautions to include isolation units for COVID-19 positive residents</li><li>Screening residents, staff, and essential visitors</li><li>Restricting visitation</li><li>Testing staff and residents for COVID-19 based on current protocols and availability of tests</li><li>Postponing communal activities</li><li>Universal masking for all staff</li><li>Monitoring of residents every shift for signs and symptoms</li><li>Temperature checks daily</li><li>Increased monitoring of vitals</li><li>Increased disinfecting efforts</li></ul></p><table><thead> <tr><th>Operational Beds</th><th>New Positive Covid Resident Cases Since Prior Day</th><th>Cumulative Total of Residents Admitted w/Covid</th><th>Cumulative Total of Covid Positive Residents</th><th>New Positive Covid Staff Cases Since Prior Day</th><th>Cumulative Total Number of Covid Positive Staff</th><th>Incidents of 3 or More Residents/Staff with New Respiratory Symptoms Within 72 Hours</th><th>Open for Visitation</tr></thead><tbody><tr><td>' + $beds + '</td><td>' + $positiveresidents + '</td><td>' + $admittedcovid + '</td><td>' + $totalpositiveresidents + '</td><td>' + $positivestaff + '</td><td>' + $totalpositivestaff + '</td><td>' + $symptomsin72hours + '</td><td>' + $open + '</td></tr></tbody></table></aside></div>';

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