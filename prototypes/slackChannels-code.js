const { slackChannels } = require('../prototypes/datasets/slackChannels');

const slackChannelPrompts = {
  // Return the total number of pinned posts across the Slack community
  // Return -> 70
  findTotalNumberPins() {

  },

  // Return the channel with the oldest post. 
  // Return -> {
  //   title: '#code-fare',
  //   isPrivate: false,
  //   memberCount: 410,
  //   numPins: 5,
  //   latestPost: '05/06/21'
  // }
  // Hint: Think about how you will need to format the dates for this! 
  findLeastActiveChannel() {

  },

  // Return the slack channels organized by privacy level. 
  // Return -> {
  //  privateChannels: ['#instructional-staff', '#turing-jcs', '#staff'],
  //  publicChannels: [
  //    '#health-wellness',
  //    '#unlearning-white-supremacy',
  //    '#code-fare',
  //    '#nature-appreciation',
  //    '#fitness'
  //  ]
  // }
  organizeByPrivacyLevel() {

  },

  // Return the name of the largest Slack channel. Remember to parse out the octothorpe!
  // Return -> 'health-wellness'
  findLargestChannel() {

  }
};
