const { slackChannels } = require('../prototypes/datasets/slackChannels');

const slackChannelPrompts = require("../prototypes/slackChannels-code");

describe("Slack Channel Prompts", () => {
  it.skip("findTotalNumberPins", () => {
    const e = slackChannelPrompts.findTotalNumberPins();
    const result = 70;

    expect(e).to.deep.equal(result);
  });
  it.skip("findLeastActiveChannel", () => {
    const e = slackChannelPrompts.findLeastActiveChannel();

    const result = {
      title: "#code-fare",
      isPrivate: false,
      memberCount: 410,
      numPins: 5,
      latestPost: "05/06/21"
    };

    expect(e).to.deep.equal(result);
  });
  it.skip("organizeByPrivacyLevel", () => {
    const e = slackChannelPrompts.organizeByPrivacyLevel();

    const result = {
      privateChannels: ["#instructional-staff", "#turing-jcs", "#staff"],
      publicChannels: [
        "#health-wellness",
        "#unlearning-white-supremacy",
        "#code-fare",
        "#nature-appreciation",
        "#fitness"
      ]
    };

    expect(e).to.deep.equal(result);
  });
  it.skip("findLargestChannel", () => {
    const e = slackChannelPrompts.findLargestChannel();
    const result = "health-wellness";

    expect(e).to.deep.equal(result);
  });
});
