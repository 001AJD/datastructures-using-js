import { expect } from 'chai';
import { removeDuplicates } from '../arrays/removeDuplicatesInPlace.js';

describe('Test Suite for removeDuplicates function', ()=>{
  it('Should return number unique values in ascending array', (done) => {
    const input = [1,1,2];
    const expectedOutput = 2;
    const result = removeDuplicates(input);
    expect(result).to.be.equal(expectedOutput);
    done();
  });

  it('Should return number unique values in descending array', (done) => {
    const input = [2,2,1];
    const expectedOutput = 2;
    const result = removeDuplicates(input);
    expect(result).to.be.equal(expectedOutput);
    done();
  });
});