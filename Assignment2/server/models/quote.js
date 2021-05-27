const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
      },
    sayer: {
        type: String,
        required: true
      }
});

module.exports = Quote = mongoose.model('quote', QuoteSchema);