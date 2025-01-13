const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const connectDB = async () => {
  try {
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
