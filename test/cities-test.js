const { cities } = require('../prototypes/datasets/cities');

const cityPrompts = require("../prototypes/cities-code");

describe("City Prompts", () => {
  it.skip("should return a list of all Western cities", () => {
    const e = cityPrompts.locateAllWesternCities();
    const result = ["denver", "chicago", "houston", "phoenix", "seattle"];

    expect(e).to.deep.equal(result);
  });

  it.skip("should return a list of all cities in alphabetical order", () => {
    const e = cityPrompts.alphabatizeCities();
    const result = ["atlanta", "chicago", "denver", "houston", "louisville", "memphis", "philadelphia", "phoenix", "seattle"];

    expect(e).to.deep.equal(result);
  });
  it.skip("should return a list of all state abbreviations", () => {
    const e = cityPrompts.listStateAbbreviations();
    const result = ["CO", "IL", "GA", "TX", "AZ", "PA", "WA", "TN", "KY"];

    expect(e).to.deep.equal(result);
  });

  it.skip("should return a list of top attractions by state for a given region", () => {
    const e = cityPrompts.findAttractionsByRegion("southeast");
    const result = [{
      georgia: ["World of Coca-Cola", "Georgia Aquarium", "MODA"]
    }, {
      tennessee: ["Graceland", "National Civil Rights Museum", "Beale Street"]
    }, {
      kentucky: ["Louisville Slugger Museum & Factory", "Churchill Downs", "Evan Williams Bourbon Experience"]
    }];

    expect(e).to.deep.equal(result);
  });
});
