var Calculator = require('./calculator');
var expect = require('chai').expect;

describe('Calculator', function() {
    
    var calculator;

	beforeEach(function () {
		calculator = new Calculator();
	})
    
    it('should add two numbers and return the sum of them', function() {
        expect(calculator.add(1, 2)).to.equal(3);
    });
});
