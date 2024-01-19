import { expect } from "chai";
import { arraySearch } from "../arrays/arraySearch.js";

describe("Test Suite for array Search program", () => {
	it("should return a result array ", (done) => {
		let arr1 = [10, 20, 10, 10, 30, 40, 50, 3, 100];
		let arr2 = [10, 50, 110, 20];
		const expectedResult = [true, true, false, true];
		let result = arraySearch(arr1, arr2);
		result.forEach((item, index) => {
			expect(item).to.be.equal(expectedResult[index]);
		});
		done();
	});
});
