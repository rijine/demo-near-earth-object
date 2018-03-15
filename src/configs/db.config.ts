export const DB_CONFIG = {
  dbName:
    process.env.NODE_ENV === 'production'
      ? process.env.DB_NAME
      : 'near_earth_objects'
};
