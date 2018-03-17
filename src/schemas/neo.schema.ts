import { Schema, Model, model, Document } from 'mongoose';
import { Neo } from './../models/neo';

export interface INeoModel extends Neo, Document {}

export const NeoSchema: Schema = new Schema({
  date: Date,
  reference: String,
  name: String,
  speed: Number,
  isHazardous: Boolean
});

export const NeoModel: Model<INeoModel> = model<INeoModel>(
  'Neo',
  NeoSchema,
  'near_earth_objects'
);
