
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
mongoose.connection.on('error', (err) => {
  console.error(`Database Connection Error:  + ${err}`);
});


mongoose.connection.on('connected', () => {
  console.info('Succesfully connected to MongoDB Database');
});


module.exports = mongoose;
