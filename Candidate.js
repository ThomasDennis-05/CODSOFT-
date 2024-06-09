const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    firstname: String,
    surname: String,
    nationality: String,
    userid: { type: String, unique: true },
    password: String,
    userType: { type: String, default: 'candidate' }
});

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;
