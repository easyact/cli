import {Router, Response, Request} from 'express';
import mongoose from 'mongoose';

const r: Router = Router();
const Project = mongoose.model('Project');
r.get('/projects.json', (request: Request, response: Response) => {
  let list = [{
    title: 'Greetings.',
    desc: 'Hello Angular 2'
  }];
  Project.find
  response.json(list);
});
r.post('/projects.json', (req, res) => {
  res.json({id: 1});
});

export {r}
