import {Router, Response, Request} from 'express';

const r: Router = Router();

r.get('/projects.json', (request: Request, response: Response) => {
  response.json([{
    title: 'Greetings.',
    desc: 'Hello Angular 2'
  }]);
});
r.post('/projects.json', (req, res) => {
  res.json({id: 1});
});

export {r}
