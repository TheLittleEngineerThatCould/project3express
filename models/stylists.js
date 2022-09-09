const mongoose = require('mongoose');

const stylistSchema = new mongoose.Schema({
    description: String,
    complete: Boolean
});

const Stylists = mongoose.model('Stylist', stylistSchema);

module.exports = Stylists;