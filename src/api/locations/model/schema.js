const autoIncrement = require('mongoose-auto-increment');

const mongoose = require('../../../core/connection');


const mongooseCon = mongoose.createConnection('mongodb://localhost:27017/test', { useNewUrlParser: true });
autoIncrement.initialize(mongooseCon);

const locationSchema = new mongoose.Schema({
  name: String,
  coordinates: Object,
  status: String,
});

locationSchema.plugin(autoIncrement.plugin, 'locations');

const LocationsModel = mongoose.model('locations', locationSchema);

export default LocationsModel;
