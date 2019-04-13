const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SubjectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  semester: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  university: {
    type: String
  },
  modules: [
    {
      name: { type: String }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Subject = mongoose.model("subjects", SubjectSchema);
