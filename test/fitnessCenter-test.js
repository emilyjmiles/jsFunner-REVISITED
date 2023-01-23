const { trainers, exercisers } = require('../prototypes/datasets/fitnessCenter');

const fitnessCenterPrompts = require("../prototypes/fitnessCenter-code");

describe('Fitness Center Prompts', () => {
  it.skip("should return a list of trainers that fit an exerciser's budget", () => {
    const e = fitnessCenterPrompts.findTrainerInBudget("Ron");
    const result = ["Tammy", "Jean-Ralphio", "Bobby Newport"];

    expect(e).to.deep.equal(result);
  });

  it.skip("should return a message if no trainers fit within an exerciser's budget ", () => {
    const e = fitnessCenterPrompts.findTrainerInBudget("Andy");
    const result = "Sorry, no trainers available at this rate!";

    expect(e).to.deep.equal(result);
  });

  it.skip("should return the first trainer that specializes in an exerciser's interests", () => {
    const e1 = fitnessCenterPrompts.findTrainerForInterest("Mark");
    const e2 = fitnessCenterPrompts.findTrainerForInterest("Jerry");

    const result1 = "Bobby Newport";
    const result2 = "Donna";

    expect(e1).to.deep.equal(result1);
    expect(e2).to.deep.equal(result2);
  });

  it.skip("should return a list of all fitness areas with the trainers that teach that type of class", () => {
    const e = fitnessCenterPrompts.organizeTrainersBySpecialty();
    const result = {
      strength: ['Tammy', 'Donna', 'Mona-Lisa', 'Bobby Newport'],
      cardio: ['Tammy', 'Bobby Newport'],
      yoga: ['Chris', 'Jean-Ralphio', 'Donna', 'Mona-Lisa', 'Bobby Newport'],
      meditation: ['Chris', 'Mona-Lisa'],
      recovery: ['Chris', 'Donna'],
      pilates: ['Jean-Ralphio', 'Mona-Lisa', 'Bobby Newport']
    };

    expect(e).to.deep.equal(result);
  });
});