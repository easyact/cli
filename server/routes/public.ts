import {Router, Response, Request} from 'express';

const publicRouter: Router = Router();

publicRouter.get('/projects', (request: Request, response: Response) => {
  response.json([{
    title: 'Greetings.',
    desc: 'Hello Angular 2'
  }]);
});

export {publicRouter}
