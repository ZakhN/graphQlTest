const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
mongoose.connection.on('error', (err) => {
  console.error(`Database Connection Error:  + ${err}`);
});
mongoose.connection.on('connected', () => {
  console.info('Succesfully connected to MongoDB Database');
});

module.exports = mongoose;
