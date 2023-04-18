const express = require('express');
const app = express();


app.use(express.static('public'));

// Default route - serve index.html
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(3000, function() {
  console.log('Server started on port 3000');
});