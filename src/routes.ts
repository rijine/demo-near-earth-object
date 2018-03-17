import { Router } from 'express';
import { NeoController, RollUpController } from './controllers';

const router = Router();
const neoController = new NeoController();
const rollUpController = new RollUpController();

export default function appRouteConfig(app: any): void {
  //router.get('/', neoController.fastest);
  router.get('/neo/rollup', rollUpController.rollup);
  router.get('/neo/hazardous', neoController.hazardous);
  router.get('/neo/fastest', neoController.fastest);
  router.get('/neo/best-year', neoController.bestYear);
  router.get('/neo/best-month', neoController.bestMonth);

  app.use(router);
}
