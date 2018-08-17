import { autoIncrement, mongoose } from '../../../core/connections/mongo';

const locationSchema = new mongoose.Schema({
  name: String,
  coordinates: Object,
  status: String,
});

locationSchema.plugin(autoIncrement.plugin, 'locations');

const LocationsModel = mongoose.model('locations', locationSchema);

export default LocationsModel;
