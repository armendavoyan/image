const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PhotosSchema = new Schema({
  data : Buffer,
  contentType : String
});

module.exports = mongoose.model('photos', PhotosSchema);
