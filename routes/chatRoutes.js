const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/message', (req, res) => {
  const { message } = req.body;
  io.emit('chatMessage', message);
  res.status(200).send('Message sent');
});

module.exports = router;
