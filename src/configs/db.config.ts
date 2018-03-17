export const DB_CONFIG = {
  connString:
    process.env.NODE_ENV === 'production'
      ? process.env.DB_NAME
      : 'mongodb://localhost/nasa_db'
};
