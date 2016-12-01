"use strict";
const express = require('express');
const mongoose = require('mongoose');
const r = express.Router();
exports.r = r;
const Project = mongoose.model('Project');

r.get('/projects.json', (request, response) => {
  Project.find(list => response.json(list));
});
r.post('/projects.json', (req, res) => {
  res.json({id: 1});
});
