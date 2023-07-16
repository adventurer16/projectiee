const express = require('express');
const app = express();
const usersRouter = require('./routes/users');
const port = 3000;


// Use the route file
app.use('/', usersRouter);


// Start the server
app.listen(port, () => {
  console.log (`Server is listening on port ${port}`);
});
