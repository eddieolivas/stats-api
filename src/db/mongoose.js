const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Sets up the database connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});