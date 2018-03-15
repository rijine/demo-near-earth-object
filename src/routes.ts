import { Router } from 'express';
import { NeoController, RollUpController } from './controllers';

const router = Router();
const neoController = new NeoController();
const rollUpController = new RollUpController();

export default function appRouteConfig(app: any): void {
  router.get('/', neoController.fastest);
  router.get('/rollup', rollUpController.rollup);

  app.use(router);
}
