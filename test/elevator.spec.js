var chai = require('chai');
var expect = chai.expect;
var elevator = require('./../elevator.js');

describe('An Elevator in a Home', function () {
  it('should exist', function () {
    // make sure the function in present and returns a truthy value.
    var doesElevatorExist = elevator.goto;

    expect(doesElevatorExist).to.not.be.undefined;
    expect(doesElevatorExist).to.a.instanceOf(Function);

  });

  describe('should take a passenger from the first floor', function () {
    it('to the top floor', function () {
      var ride = elevator.goto(0, '3');

      expect(ride).to.equal(3);
      expect(ride).to.not.be.a('string');
    });

    it('to the second floor', function () {
      var ride = elevator.goto(0, '2');

      expect(ride).to.equal(2);
      expect(ride).to.not.be.a('string');
    });
  });

  describe('should take a passenger from the top floor', function () {
    it('to the first floor', function () {
      var ride = elevator.goto(3, '0');

      expect(ride).to.equal(-3);
      expect(ride).to.not.be.a('string');
    });

    it('to the third floor', function () {
      var ride = elevator.goto(3, '2');

      expect(ride).to.equal(-1);
      expect(ride).to.not.be.a('string');
    });
  });

  describe('should not move', function () {
    describe('if given a wrong floor number', function () {
      it('first floor to fifth floor', function () {
        var ride = elevator.goto(0, '4');
        // should return 0 because '4' is not a valid floor
        expect(ride).to.not.equal(-4);
        expect(ride).to.equal(0);
        expect(ride).to.not.be.a('string');

      });

      it('fifth floor to first floor', function () {
        var ride = elevator.goto(4, '0');

        expect(ride).to.equal(0);
        expect(ride).to.not.be.a('string');
      });
    });
  });

  describe('should validate inputs given', function () {
    it('not take objects', function () {
      var ride = elevator.goto(0,{});
      expect(ride).to.equal(0);
      expect(ride).to.not.be.a('object');

     ride = elevator.goto({}, '2');
     expect(ride).to.equal(0);
     expect(ride).to.not.be.a('object');
    });

    it('not take arrays', function () {
      var ride = elevator.goto(0,[]);
      expect(ride).to.equal(0);
      expect(ride).to.not.be.a('array');

     ride = elevator.goto([], '2');
     expect(ride).to.equal(0);
     expect(ride).to.not.be.a('array');
    });

    it('should only accept a number as the first parameter', function () {
      var ride = elevator.goto('0', '3');

      expect(ride).to.equal(0);
    });

    it('should only accept a string as the second parameter', function () {
      var ride = elevator.goto(2, 1);

      expect(ride).to.equal(0);
    });

  });

});
