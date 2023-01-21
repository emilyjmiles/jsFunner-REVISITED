const { cities } = require('./datasets/cities');

const cityPrompts = {
  // Return an array of the names of the Western cities.
  // Hint: Make sure to include south and midwest too!
  // ["denver", "chicago", "houston", "phoenix", "seattle"]
  locateAllWesternCities() {

  },

  // Return an array of the names of the cities in alphabetical order.
  // ex: ["atlanta", "chicago", "denver", "houston", "louisville", "memphis", "philadelphia", "phoenix", "seattle"];
  alphabatizeCities() {

  },

  // Return an array of the the state abbreviations.
  // ex: ["CO", "IL", "GA", "TX", "AZ", "PA", "WA", "TN", "KY"]
  listStateAbbreviations() {

  },

  // Return all of the top attractions for a given region. 
  // ex: Passing in 'southeast' should return 
  // [
  //   { georgia: ['World of Coca-Cola', 'Georgia Aquarium', 'MODA'] },
  //   { Tennessee: ['Graceland', 'National Civil Rights Museum', 'Beale Street'] },
  //   { Kentucky: ['Louisville Slugger Museum & Factory', 'Churchill Downs', 'Evan Williams Bourbon Experience'] }
  // ]
  findAttractionsByRegion(region) {

  }
};

module.exports = cityPrompts;
