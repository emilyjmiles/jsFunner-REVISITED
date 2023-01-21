const { cities } = require('../prototypes/datasets/cities');

const cityPrompts = require("../prototypes/cities-code");

describe("City Prompts", () => {
  it.skip("locateAllWesternCities", () => {
    const e = cityPrompts.locateAllWesternCities();
    const result = ["denver", "chicago", "houston", "phoenix", "seattle"];

    expect(e).to.deep.equal(result);
  });
  it.skip("alphabatizeCities", () => {
    const e = cityPrompts.alphabatizeCities();
    const result = ["atlanta", "chicago", "denver", "houston", "louisville", "memphis", "philadelphia", "phoenix", "seattle"];

    expect(e).to.deep.equal(result);
  });
  it.skip("listStateAbbreviations", () => {
    const e = cityPrompts.listStateAbbreviations();
    const result = ["CO", "IL", "GA", "TX", "AZ", "PA", "WA", "TN", "KY"];

    expect(e).to.deep.equal(result);
  });
  it.skip("findAttractionsByRegion", () => {
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
