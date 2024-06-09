const mongoose = require('mongoose');

const employerSchema = new mongoose.Schema({
    companyName: String,
    location: String,
    userid: { type: String, unique: true },
    password: String,
    userType: { type: String, default: 'employer' }
});

const Employer = mongoose.model('Employer', employerSchema);

module.exports = Employer;
