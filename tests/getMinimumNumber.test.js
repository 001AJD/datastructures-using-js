import { expect } from 'chai';
import { getMinimumNumber } from '../linearSearch/getMinimumNumber.js';

describe("Test Suite for getMinimumNumber from array function", ()=>{
  it("Should return minium number from an array", (done)=>{
    const arr = [10,45,78,98,2,1,56];
    const miniumNumber = 1;
    const response = getMinimumNumber(arr);
    expect(miniumNumber).to.be.equal(response);
    done();
  });

  it("Should return not an array",(done)=>{
    const input = "MyString"
    const expectedResponse = "Not an array"
    const response = getMinimumNumber(input);
    expect(response).to.be.equal(expectedResponse);
    done();
  });
});