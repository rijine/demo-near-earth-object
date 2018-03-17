import mongoose from 'mongoose';
import { DB_CONFIG } from './../configs/db.config';

export enum ConnectionState {
  ALIVE,
  DEAD
}

export class DbConnection {
  private connectionString: string;

  constructor() {
    this.connectionString = DB_CONFIG.connString;
  }

  connect(): any {
    const promise = mongoose.connect(this.connectionString);
  }

  status(): ConnectionState {
    const connection = mongoose.connection;
    if (!connection) {
      return ConnectionState.DEAD;
    } else {
      return ConnectionState.ALIVE;
    }
  }
}
