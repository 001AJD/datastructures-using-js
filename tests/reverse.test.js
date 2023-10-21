import { expect } from 'chai';
import { reverseString } from '../strings/reverse.js';

describe('Test Suite for reverseString function', ()=>{
  it('Should return a reverse of the input string', (done)=>{
    const input = 'ABC';
    const expectedOutput = 'CBA';
    const result = reverseString(input);
    expect(result).to.be.equals(expectedOutput);
    done();
  });

  it('Should return invalid input', (done)=>{
    const input = 123;
    const expectedOutput = 'invalid input';
    const result = reverseString(input);
    expect(result).to.be.equals(expectedOutput);
    done();
  });
});