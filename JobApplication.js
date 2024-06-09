const mongoose = require('mongoose');

// Define the schema for job applications
const jobApplicationSchema = new mongoose.Schema({
    jobTitle: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    resume: { type: String, required: true },
    coverLetter: { type: String, required: true },
    userID: { type: String, required: true },
    applicationDate: { type: Date, default: Date.now },
    applicationStatus: { type: String, enum: ['Pending', 'Accepted', 'Rejected'], default: 'Pending' }
});

// Create a model from the schema
const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

// Export the model to use it in other parts of the application
module.exports = JobApplication;
