const mongoose = require('mongoose');
const connection = mongoose.createConnection('mongodb+srv://lermaangelisw:UHAmMHvSdwh7fojc@todoapp.2ttdv.mongodb.net/').on('open', () => {
    console.log("MongoDB database connected succesfully");
}).on('error', () => {
    console.log("MongoDB database error");
});

module.exports = connection;