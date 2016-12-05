"use strict";
const express = require('express');
const mongoose = require('mongoose');
const r = express.Router();
exports.r = r;
const Project = mongoose.model('Project');

r.get('/projects.json', (request, response) => {
  Project.find((err, list) => response.json(list));
});
r.post('/projects.json', (req, res) => {
  new Project(req.body).save()
    .then(project => res.end(`${project._id}`), err => res.end(err));
});
