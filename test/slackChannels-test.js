const { slackChannels } = require('../prototypes/datasets/slackChannels');

const slackChannelPrompts = require("../prototypes/slackChannels-code");

describe("Slack Channel Prompts", () => {
  it.skip("should return the total number of pinned posts across the Slack community", () => {
    const e = slackChannelPrompts.findTotalNumberPins();
    const result = 70;

    expect(e).to.deep.equal(result);
  });

  it.skip("should return the channel with the oldest post", () => {
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

  it.skip("should return a list of privacy levels with the channels that have that privacy setting", () => {
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

  it.skip("should return the name of the largest Slack channel", () => {
    const e = slackChannelPrompts.findLargestChannel();
    const result = "health-wellness";

    expect(e).to.deep.equal(result);
  });
});
