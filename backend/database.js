// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

import mongoose from 'mongoose'

(async () => {

    const db = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log('Connected to: ', db.connection.name)
})();

