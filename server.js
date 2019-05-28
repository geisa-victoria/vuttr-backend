const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1/vuttr', { useNewUrlParser: true });

requireDir('./src/models');
const Tool = mongoose.model('Tool');

app.use('/api', (req, res) => {
  Tool.create({
    title: 'Oii',
    link: 'github.com/facebook/react-native',
    description: 'lala',
    tags: ["organization", "planning"]
  });
  return res.send('Helooo');
});

app.listen(3002);
