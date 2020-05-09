const express = require('express');
require('./db/mongoose');
const Location = require('./models/location');
const locationRouter = require('./routers/location');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(locationRouter);

// app.listen(port, () => {
//     console.log('COVID-19 stats API server is up on port ' + port);
// });
