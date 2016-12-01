"use strict";
const express_1 = require('express');
const mongoose_1 = require('mongoose');
const r = express_1.Router();
exports.r = r;
const Project = mongoose_1.default.model('Project');
r.get('/projects.json', (request, response) => {
    let list = [{
            title: 'Greetings.',
            desc: 'Hello Angular 2'
        }];
    Project.find;
    response.json(list);
});
r.post('/projects.json', (req, res) => {
    res.json({ id: 1 });
});
//# sourceMappingURL=/Users/zhaolei/Documents/crowds/cli/dist/server/routes/public.js.map