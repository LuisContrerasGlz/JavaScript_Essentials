const chai = require("chai"),
  assert = chai.assert,
  expect = chai.expect,
  should = chai.should();

describe("String", function () {
  before(function () {
    // runs once before the first test in this block
    console.log("before hook");
  });

  after(function () {
    // runs once after the last test in this block
    console.log("after hook");
  });

  beforeEach(function () {
    // runs before each test in this block
    console.log("beforeEach hook");
  });

  afterEach(function () {
    // runs after each test in this block
    console.log("afterEach hook");
  });

  let name = "Luis";
  it("should be of type string", function () {
    name.should.be.a("string");
    expect(name).to.be.a("string");
    assert.typeOf(name, "string");
  });

  it("should contain Luis", function () {
    name.should.not.equal("Francisco");
    name.should.equal("Luis");
    expect(name).to.equal("Luis");
    assert.equal(name, "Luis");
  });
});
