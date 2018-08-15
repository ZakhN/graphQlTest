const mongoose = require('../../../core/connection');

const locationScheme = new mongoose.Schema({
  name: String,
  lat: Boolean,
  lng: Boolean,
});
