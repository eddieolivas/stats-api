const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dbUser:Marvino03110311!!@stats-api-6abbd.mongodb.net/stats-api?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});