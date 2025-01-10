const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = () =>{
    mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log('connected to database')
    })
    .catch((err) => {
        console.log(`error while connecting ${err}`)
    })
}

// const connectDB = () => {
//   const mongoURI = process.env.MONGO_URL;

//    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//    .then(() => {
//     console.log('connected to database')
// })
// .catch((err) => {
//     console.log(`error while connecting ${err}`)
// })
// }

module.exports={
  connectDB
}
