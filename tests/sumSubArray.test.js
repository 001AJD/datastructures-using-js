import { expect } from "chai";
import { sumSubArray } from "../arrays/sumSubArray.js";

describe("Test Suite for sumSubArray function", () => {
	it("Should return true for the given input", (done) => {
		const inputArr = [4, 2, 1, 2, -4, -1, -3];
		const result = sumSubArray(inputArr);
		expect(result).to.be.equal(true);
		done();
	});

	it("Should return false for the given input", (done) => {
		const inputArr = [4, 2, 1, 2, 5, -1, -3];
		const result = sumSubArray(inputArr);
		expect(result).to.be.equal(false);
		done();
	});
});
