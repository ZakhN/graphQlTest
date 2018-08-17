
import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
autoIncrement.initialize(mongoose);

mongoose.connection.on('error', (err) => {
  console.error(`Database Connection Error:  + ${err}`);
});
mongoose.connection.on('connected', () => {
  console.info('Succesfully connected to MongoDB Database');
});

export { mongoose, autoIncrement };
