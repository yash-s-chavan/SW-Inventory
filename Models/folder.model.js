const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foldersSchema = new Schema({
    name: {type: String, required: true},
    category: {type: String, required: true},
}, {
    timestamps: true,
});

const Folder = mongoose.model('Folder', foldersSchema);

module.exports = Folder;