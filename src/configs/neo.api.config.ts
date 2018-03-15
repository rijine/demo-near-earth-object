export const NEO_API_CONFIG = {
  api_key:
    process.env.NODE_ENV === 'production'
      ? process.env.NEO_API_KEY
      : 'N7LkblDsc5aen05FJqBQ8wU4qSdmsftwJagVK7UD',
  url: 'https://api.nasa.gov/neo/rest/v1/'
};
