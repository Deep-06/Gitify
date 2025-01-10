const dotenv = require('dotenv');
const express = require('express') ;
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectDB } = require('./db');
const userRouter = require('./routes/userRoutes');

dotenv.config({path:'./.env'});

const PORT = process.env.PORT || 8080;
const app = express();

//connectDB();

app.use(express.json());
app.use(cors());
//app.use(bodyParser.json());
app.use('/', userRouter);

const startServer = async () => {
  try {
    await connectDB(); 
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
  }
};

startServer();

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
