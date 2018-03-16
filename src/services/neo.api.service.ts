import { NEO_API_CONFIG } from './../configs/neo.api.config';
import axios from 'axios';
import { Neo } from '../models/neo';

export class NeoApiService {
  constructor() {}

  /**
   * Returns all data neo objects from strat time to endtime
   * @param startDate: start date for calling api
   * @param endDate: end date for calling api
   */
  static async feed({ startDate, endDate }: any) {
    const url = NEO_API_CONFIG.url + 'feed';
    try {
      const { data } = await axios.get(url, {
        params: {
          start_date: startDate,
          end_date: endDate,
          api_key: NEO_API_CONFIG.api_key
        }
      });
      const neoData = data.near_earth_objects;
      let neosDocuments: Neo[] = [];
      Object.keys(neoData).map(date => {
        let neos = neoData[date].map((neo: any) => {
          return this.mapToModel({ date, ...neo });
        });
        console.log(JSON.stringify(neos));
        neosDocuments = [...neosDocuments, ...neos];
      });

      return neosDocuments;
    } catch (err) {
      console.log(err);
    }
    return [];
  }

  /**
   * Converts noe object to db model
   * @param object neo data from api
   */
  static mapToModel({
    date = null,
    neo_reference_id = null,
    name = null,
    close_approach_data,
    is_potentially_hazardous_asteroid = false
  }: any): Neo {
    return {
      date,
      reference: neo_reference_id,
      name,
      speed: close_approach_data[0].relative_velocity.kilometers_per_hour,
      isHazrdous: is_potentially_hazardous_asteroid
    };
  }
}
