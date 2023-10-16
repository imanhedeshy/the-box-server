// routes/index.js
const express = require('express');
const router = express.Router();
const path = require('path');

const userRoutes = require('./userRoutes');
const threadRoutes = require('./threadRoutes');
const s3Routes = require('./s3Routes');

router.use('/users', userRoutes);
router.use('/threads', threadRoutes);
router.use('/s3', s3Routes);

router
  .route('/')
  .get((req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  })
  .post((req, res) => {
    console.log('POST request received on root!');
    res.json({ message: 'You posted on The BOX!' });
  });
  
module.exports = router;
