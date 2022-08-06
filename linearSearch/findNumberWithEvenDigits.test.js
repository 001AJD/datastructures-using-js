import { expect } from 'chai';
import { findNumberWithEvenDigits } from './findNumberWithEvenDigits.js';

describe('Test Suite for findNumberWithEvennumber of digits',()=>{
  it('should return number of elements having even number of digits', (done)=>{
    const input = [102,200,199,10,1];
    const expectedResult = 1
    const actualResult = findNumberWithEvenDigits(input);
    expect(actualResult).to.be.equal(expectedResult);
    done();
  });

  it('should return not an array', (done)=>{
    const input = 'my string';
    const expectedResult = 'Not an array';
    const actualResult = findNumberWithEvenDigits(input);
    expect(actualResult).to.be.equal(expectedResult);
    done();
  });

  it('should handle non-integer input in an array', (done)=>{
    const input = [102,200,199,10,1,'a'];
    const expectedResult = 1
    const actualResult = findNumberWithEvenDigits(input);
    expect(actualResult).to.be.equal(expectedResult);
    done();
  });
});