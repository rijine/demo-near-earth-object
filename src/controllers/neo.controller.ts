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
      const data = await NeoDbService.findFastest({isHazardous: req.query.hazardous});
      res.json({ success: true, data });
    } catch (err) {
      return res.json({ success: false, message: err.message });
    }
  }

  async bestYear(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await NeoDbService.findBestYear({isHazardous: req.query.hazardous});
      res.json({ success: true, data });
    } catch (err) {
      return res.json({ success: false, message: err.message });
    }
  }

  async bestMonth(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await NeoDbService.findBestMonth({isHazardous: req.query.hazardous});
      res.json({ success: true, data });
    } catch (err) {
      return res.json({ success: false, message: err.message });
    }
  }
}
