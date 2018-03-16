import { NEO_API_CONFIG } from './../configs/neo.api.config';
import axios from 'axios';

import { NeoModel } from './../schemas/neo.schema';
import { Neo } from '../models/neo';

export class NeoDbService {
  /**
   * cleanup all entries in the db
   */
  static async cleanUp() {
    return await NeoModel.remove({}).exec();
  }
  /**
   * inserts neo collection to db
   * @param data collection of Neo documents
   */
  static async insertMany(data: Neo[]) {
    return await NeoModel.insertMany(data);
  }

  /**
   * finds all hazardous asteroids from db
   */
  static async findAllHazardous() {}

  /**
   * returns fastest hazardous or non hazardous asteroids
   * @param isHazardous determine asteroid is hazardous
   */
  static async findFastest({ isHazardous = false }: any) {}

  /**
   * returns best year based on hazardous or non hazardous asteroids
   * @param isHazardous determine asteroid is hazardous
   */
  static async findBestYear({ isHazardous = false }: any) {}

  /**
   * returns best month based on hazardous or non hazardous asteroids
   * @param isHazardous determine asteroid is hazardous
   */
  static async findBestMonth({ isHazardous = false }: any) {}
}
