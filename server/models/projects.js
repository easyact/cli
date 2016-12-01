var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema(
  {
    name: {type: String, default: 'test', required: true},
    joiners: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
  },
  {strict: false}
);
mongoose.model('Project', projectSchema);

var Project = mongoose.model('Project');
