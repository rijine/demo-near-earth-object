import { Request, Response, NextFunction } from 'express';
import { Log } from '../services/logger';
import { NeoDbService } from '../services/neo.db.service';

export class NeoController {
  async hazardous(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await NeoDbService.findAllHazardous();
      return res.json({ success: true, data });
    } catch (err) {
      return res.json({ success: false, message: err.message });
    }
  }

  async fastest(req: Request, res: Response, next: NextFunction) {
    try {
      // test = await
      await 1;
      res.json({ success: true });
    } catch (err) {
      return res.json({ success: false, message: err.message });
    }
  }

  async bestYear(req: Request, res: Response, next: NextFunction) {
    try {
      // test = await
    } catch (err) {
      return res.json({ success: false, message: err.message });
    }
  }

  async bestMonth(req: Request, res: Response, next: NextFunction) {
    try {
      // test = await
    } catch (err) {
      return res.json({ success: false, message: err.message });
    }
  }
}
