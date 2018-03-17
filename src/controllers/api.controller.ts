import { Request, Response, NextFunction } from 'express';

export class ApiController {
  version(req: Request, res: Response, next: NextFunction) {
    res.json({version: 'v1'});
  }
  default(req: Request, res: Response, next: NextFunction) {
    res.json({ hello: 'world!' });
  }
}
