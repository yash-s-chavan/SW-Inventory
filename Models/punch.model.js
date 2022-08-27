const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const punchesSchema = new Schema({
    name: {type: String, required: true},
    category: {type: String, required: true},
}, {
    timestamps: true,
});

const Punch = mongoose.model('Punch', punchesSchema);

module.exports = Punch;