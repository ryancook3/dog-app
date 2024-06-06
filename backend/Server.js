const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/User');
const Pet = require('./models/Pet');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    email,
    password: hashedPassword,
  });

  try {
    await user.save();
    res.status(201).send({ userId: user._id });
  } catch (error) {
    res.status(500).send('Error registering user');
  }
});

app.post('/api/pets', async (req, res) => {
  const { name, age, breed, ownerId } = req.body;

  const pet = new Pet({
    name,
    age,
    breed,
    owner: ownerId
  });

  try {
    await pet.save();
    await User.findByIdAndUpdate(ownerId, { $push: { pets: pet._id } });
    res.status(201).send('Pet profile created successfully');
  } catch (error) {
    res.status(500).send('Error creating pet profile');
  }
});

app.get('/api/users/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('pets');
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send('Error fetching user data');
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
