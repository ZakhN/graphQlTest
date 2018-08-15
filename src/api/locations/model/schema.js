const mongoose = require('../../../core/connection');

const locationSchema = new mongoose.Schema({
  name: String,
  lat: Boolean,
  lng: Boolean,
});

const locationsModel = mongoose.model('locations', locationSchema);

module.exports = locationsModel;
