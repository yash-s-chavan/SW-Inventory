const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

const stampsRouter = require('./routes/stamps');
const punchesRouter = require('./routes/punches');
const foldersRouter = require('./routes/folders');
const diesRouter = require('./routes/dies');
const colorsRouter = require('./routes/colors')

app.use('/stamps', stampsRouter);
app.use('/punches', punchesRouter);
app.use('/folders', foldersRouter);
app.use('/dies', diesRouter);
app.use('/colors', colorsRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
