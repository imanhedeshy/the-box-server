// routes/s3Routes.js
const express = require('express');
const router = express.Router();
const s3Controller = require('../controllers/s3Controller');

router.get('/get-presigned-url', async (req, res) => {
  try {
    const url = await s3Controller.generatePresignedUrl('your-bucket', 'uploads/' + req.query.filename);
    res.json({ presignedUrl: url });
  } catch (error) {
    res.status(500).send('Error generating presigned URL');
  }
});

module.exports = router;
