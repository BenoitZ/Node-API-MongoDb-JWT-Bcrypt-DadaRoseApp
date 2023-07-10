const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const projectSchema = new mongoose.Schema({
    project_final: {
        type: String
       },
},
{
    timestamps: true
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;