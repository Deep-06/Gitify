const dotenv = require('dotenv');
const express = require('express') ;
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectDB } = require('./db');
const userRouter = require('./routes/userRoutes');

dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

connectDB();

app.use(express.json());
app.use(cors());
//app.use(bodyParser.json());
app.use('/', userRouter);



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
