const express = require('express');
const router = express.Router();

// Define a route for the users endpoint
router.get('/users', (req, res) => {
  // Respond with a basic message
  res.send('This is the users endpoint');
});

module.exports = router;


