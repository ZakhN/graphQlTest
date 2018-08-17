import { autoIncrement, mongoose } from '../../../core/connections/mongo';

const couriersSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  status: String,
  locationIds: [String],
});

const couriersModel = mongoose.model('couriers', couriersSchema);

couriersSchema.plugin(autoIncrement.plugin, 'couriers');

export default couriersModel;
