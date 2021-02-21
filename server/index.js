const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const reviewRouter = require('./routes/reviewRouter');

const app = express();


app.use(bodyParser.json({ limit: "5mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
app.use(cors());

app.use('/reviews', reviewRouter);

const dbURL = 'mongodb+srv://reviewscodetest:reviewscodetest1234@cluster0.2cu11.mongodb.net/reviews?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on Port ${PORT}`)))
  .catch(err => console.log(err.message));

mongoose.set('useFindAndModify', false);