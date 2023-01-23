const { trainers, exercisers } = require('../prototypes/datasets/fitnessCenter');

const fitnessCenterPrompts = {
  // Return a list of trainers that are in a given exerciser's budget. Make sure you handle a scenario where an exerciser does not have enough money for a trainer.
  // ex: Passing in 'Ron' should return -> ['Tammy', 'Jean-Ralphio', 'Bobby Newport']
  // ex: Passing in 'Andy' should return -> 'Sorry, no trainers available at this rate!
  findTrainerInBudget() {

  },

  // Return the first trainer that specializes in all of an exerciser's interest areas. For example, Mark is interested in both 'yoga' and 'cardio' so he would like a trainer that can teach both. 
  // ex: Passing in 'Mark' should return 'Bobby Newport'
  // ex: Passing in 'Jerry' should return 'Donna'
  findTrainerForInterest() {

  },

  // Return an object that has all fitness areas as a key with an array of the trainers that teach that type of class.
  // ex: {
  //   strength: ['Tammy', 'Donna', 'Mona-Lisa', 'Bobby Newport'],
  //   cardio: ['Tammy', 'Bobby Newport'],
  //   yoga: ['Chris', 'Jean-Ralphio', 'Donna', 'Mona-Lisa', 'Bobby Newport'],
  //   meditation: ['Chris', 'Mona-Lisa'],
  //   recovery: ['Chris', 'Donna'],
  //   pilates: ['Jean-Ralphio', 'Mona-Lisa', 'Bobby Newport']
  // };
  organizeTrainersBySpecialty() {

  }
};

module.exports = fitnessCenterPrompts;