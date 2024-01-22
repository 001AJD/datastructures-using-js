import { expect } from "chai";
import { primeNumber } from "../misc/primeNumber.js";

describe("Test Suite for prime number function", () => {
	it("Should return false for the input number 1", (done) => {
		const input = 1;
		const expectedResult = false;
		const result = primeNumber(input);
		expect(result).to.be.equal(expectedResult);
		done();
	});

	it("Should return false for the input number 10", (done) => {
		const input = 10;
		const expectedResult = false;
		const result = primeNumber(input);
		expect(result).to.be.equal(expectedResult);
		done();
	});

	it("Should return true for the input number 68927", (done) => {
		const input = 68927;
		const expectedResult = true;
		const result = primeNumber(input);
		expect(result).to.be.equal(expectedResult);
		done();
	});
});
