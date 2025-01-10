const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });
// const connectDB = () =>{
//     mongoose
//     .connect(process.env.MONGO_URL)
//     .then(() => {
//         console.log('connected to database')
//     })
//     .catch((err) => {
//         console.log(`error while connecting ${err}`)
//     })
// }

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB URI:", process.env.MONGO_URL); // Debug log
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL is not defined in environment variables");
    }
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to database');
  } catch (err) {
    console.error('Error while connecting to MongoDB:', err.message);
    throw err; 
  }
};


module.exports={
  connectDB
}
