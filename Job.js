const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    jobTitle: { type: String, required: true },
    jobDescription: { type: String, required: true },
    jobRequirements: { type: String, required: true },
    workHours: { type: String, required: true },
    salary: { type: String, required: true },
    userID: { type: String, required: true }
});

module.exports = mongoose.model('Job', JobSchema);
