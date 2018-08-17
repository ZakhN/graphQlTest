import { autoIncrement, mongoose } from '../../../core/connections/mongo';

const tokenSchema = new mongoose.Schema({
  token: String,
});

const usersSchema = new mongoose.Schema({
  email: String,
  password: Object,
  tokens: [tokenSchema],
});

const usersModel = mongoose.model('users', usersSchema);

usersSchema.plugin(autoIncrement.plugin, 'users');

export default usersModel;
