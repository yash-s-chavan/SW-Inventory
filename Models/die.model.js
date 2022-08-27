const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const diesSchema = new Schema({
    name: {type: String, required: true},
    category: {type: String, required: true},
}, {
    timestamps: true,
});

const Die = mongoose.model('Die', diesSchema);

module.exports = Die;