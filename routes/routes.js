const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.render('index'); // Render the 'index' view (index.ejs)
});

// About route
router.get('/about', (req, res) => {
  res.render('about'); // Render the 'about' view (about.ejs)
});

module.exports = router;


