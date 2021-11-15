const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    _id: {
      type: String,
      required: true,
    },
    longUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
    },
    numOfEnter: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('URL', UrlSchema);
