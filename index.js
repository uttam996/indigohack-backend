const express = require('express');
const moongose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');




const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

const mybookingRouter = require('./Routes/mybooking');


app.use('/mybooking', mybookingRouter);

moongose.connect('mongodb://localhost:27017/mybooking').then(() => console.log('Connected to MongoDB')).catch(err => console.log(err));


app.listen(3000, () => console.log('Server running on port 3000'));
