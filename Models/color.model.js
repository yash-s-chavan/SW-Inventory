const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const colorsSchema = new Schema({
    name: {type: String, required: true},
    blends: {type: Boolean, required:true},
    cardstock: {type: Boolean, required:true},
    inkpads: {type: Boolean, required:true},
    markers: {type: Boolean, required:true},
    reinkers: {type: Boolean, required:true},

}, {
    timestamps: true,
});

const Color = mongoose.model('Color', colorsSchema);

module.exports = Color;