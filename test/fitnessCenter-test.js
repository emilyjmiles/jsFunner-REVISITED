const { trainers, exercisers } = require('../prototypes/datasets/fitnessCenter');

const fitnessCenterPrompts = require("../prototypes/fitnessCenter-code");

describe('Fitness Center Prompts', () => {
  it.skip("findTrainerInBudget Ron", () => {
    const e = fitnessCenterPrompts.findTrainerInBudget("Ron");
    const result = ["Tammy", "Jean-Ralphio", "Bobby Newport"];

    expect(e).to.deep.equal(result);
  });

  it.skip("findTrainerInBudget Andy", () => {
    const e = fitnessCenterPrompts.findTrainerInBudget("Andy");
    const result = "Sorry, no trainers available at this rate!";

    expect(e).to.deep.equal(result);
  });

  it.skip("findTrainerForInterest Mark", () => {
    const e = fitnessCenterPrompts.findTrainerForInterest("Mark");
    const result = "Bobby Newport";

    expect(e).to.deep.equal(result);
  });

  it.skip("findTrainerForInterest Jerry", () => {
    const e = fitnessCenterPrompts.findTrainerForInterest("Mark");
    const result = "Donna";

    expect(e).to.deep.equal(result);
  });

  it.skip("organizeTrainersBySpecialty", () => {
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