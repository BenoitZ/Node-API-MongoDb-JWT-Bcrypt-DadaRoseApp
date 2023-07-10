const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const mediaSchema = new mongoose.Schema({
    tracks_dada: {
        type: String
       },
    tracks_user: {
        type: String
    },
},
{
    timestamps: true
});

const Media = mongoose.model('Media', mediaSchema);

module.exports = Media;