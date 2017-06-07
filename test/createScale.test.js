const expect = require('chai').expect;
const {createLinearScale, createCategoryScale} = require('../lib/factories/createScale');
const it = require("mocha").it;
const describe = require("mocha").describe;
const Plottable = require("plottable");

describe('createLinearScale', function() {

  it('creates a linear scale', function () {
    const scale = createLinearScale({});

    expect(scale instanceof Plottable.Scales.Linear);
  });

  it('creates a linear scale with minimum and maximum', function () {
    const axisMinimum = 0;
    const axisMaximum = 100;
    const scale = createLinearScale({axisMinimum, axisMaximum});

    expect(scale.domainMin()).to.equal(axisMinimum);
    expect(scale.domainMax()).to.equal(axisMaximum);
  });

});

describe('createCategoryScale', function() {

  it('creates a category scale', function () {
    const scale = createCategoryScale({});

    expect(scale instanceof Plottable.Scales.Category);
  });

  it('creates a category scale with inner and outer padding', function () {
    const innerPadding = 0;
    const outerPadding = 100;
    const scale = createCategoryScale({innerPadding, outerPadding});

    expect(scale.innerPadding()).to.equal(innerPadding);
    expect(scale.outerPadding()).to.equal(outerPadding);
  });

});