const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Video = require('./models/Video');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/my-vimeo-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API Routes
app.get('/api/videos', async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/videos', async (req, res) => {
  const { title, description, url } = req.body;

  try {
    const newVideo = new Video({ title, description, url });
    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
