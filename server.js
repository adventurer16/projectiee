const express = require('express');
const app = express();
const routes = require('./routes/routes');

const port = 3000;

// Set the view engine and views directory
app.set('view engine', 'ejs'); // Use 'ejs' as the view engine
app.set('views', __dirname + '/views');


// Use the route file
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log (`Server is listening on port ${port}`);
});
