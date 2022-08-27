const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stampsSchema = new Schema({
    name: {type: String, required: true},
    category: {type: String, required: true},
}, {
    timestamps: true,
});

const Stamp = mongoose.model('Stamp', stampsSchema);

module.exports = Stamp;