const autoIncrement = require('mongoose-auto-increment');
const mongoose = require('../../../core/connection');

const mongooseCon = mongoose.createConnection('mongodb://localhost:27017/test', { useNewUrlParser: true });
autoIncrement.initialize(mongooseCon);


const usersSchema = new mongoose.Schema({
  email: String,
  password: Object,
});

const usersModel = mongoose.model('users', usersSchema);

usersSchema.plugin(autoIncrement.plugin, 'users');

export default usersModel;
