const autoIncrement = require('mongoose-auto-increment');
const mongoose = require('../../../core/connection');

const mongooseCon = mongoose.createConnection('mongodb://localhost:27017/test', { useNewUrlParser: true });
autoIncrement.initialize(mongooseCon);
import { autoIncrement, mongoose } from '../../../core/connections/mongo';

const couriersSchema = new mongoose.Schema({
  // fullname: String,
  // locations: Object,
  firstName: String,
  lastName: String,
  status: String,
  locationIds: [String],
});

const couriersModel = mongoose.model('couriers', couriersSchema);

couriersSchema.plugin(autoIncrement.plugin, 'couriers');

export default couriersModel;
