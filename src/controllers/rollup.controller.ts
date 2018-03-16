import moment from 'moment';
import { Request, Response, NextFunction } from 'express';
import { NeoApiService } from './../services/neo.api.service';
import { NeoDbService } from './../services/neo.db.service';
import { Neo } from '../models/neo';
export class RollUpController {
  /**
   * api function to pull data from api and push to db
   */
  async rollup(req: Request, res: Response, next: NextFunction) {
    const now = moment();
    const endDate = now.format('YYYY-MM-DD');
    const startDate = now.subtract(3, 'days').format('YYYY-MM-DD');

    const data: Neo[] = await NeoApiService.feed({ startDate, endDate });
    const cleaned = await NeoDbService.cleanUp();
    const inserted = await NeoDbService.insertMany(data);
    if (data.length == inserted.length) {
      res.json({ success: true, message: 'Data migrated successfully' });
    } else {
      res.json({
        success: false,
        message: 'Data migration failed or paritally successfull'
      });
    }
  }
}
