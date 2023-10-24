import { expect } from 'chai';
import { wordPattern } from '../strings/wordPattern.js';

describe('Test Suite for the wordPattern function', ()=>{
  it('Should return true for the given input', (done) => {
    const pattern = 'abba';
    const inputStr = 'dog cat cat dog'
    const expectedOutput = true;
    const result = wordPattern(inputStr, pattern);
    expect(result).to.be.equal(expectedOutput);
    done();
  });

  it('Should return false for the given input', (done) => {
    const pattern = 'abba';
    const inputStr = 'dog cat cat fish'
    const expectedOutput = false;
    const result = wordPattern(inputStr, pattern);
    expect(result).to.be.equal(expectedOutput);
    done();
  });
});