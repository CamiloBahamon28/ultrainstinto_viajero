import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express();

dotenv.config();

// mongoose
//     .connect(process.env.MONGO_URL, {useNewUrlParser: true})
//     .then(() =>{
//             console.log('mongo connect');
//         })
//         .catch((err) => console.log(err));
    
(async () => {

    const db = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log('Connected to: ', db.connection.name)
})();

app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'))

console.log('Server Port', app.get('port')); 