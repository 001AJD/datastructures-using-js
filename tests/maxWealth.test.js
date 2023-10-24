import { expect } from 'chai';
import { getMaxWealth } from '../linearSearch/maxWealth.js';

describe('Test suite for max wealth function', ()=>{
  it('Should return max wealth', (done)=>{
    const input = [
      [1,20,35],
      [5,5,5,5]
    ];
    const expectedResult = 56;
    const actualResult = getMaxWealth(input);
    expect(actualResult).to.be.equal(expectedResult);
    done();
  });

  it('Should return not an array', (done)=>{
    const input = 'my string test';
    const expectedResult = 'Not an array';
    const actualResult = getMaxWealth(input);
    expect(actualResult).to.be.equal(expectedResult);
    done();
  });

  it('Should return some input is not a number', (done)=>{
    const input = [
      [1,20,35,'xyz'],
      [5,5,5,5]
    ];
    const expectedResult = 'Some input is not a number';
    const actualResult = getMaxWealth(input);
    expect(actualResult).to.be.equal(expectedResult);
    done();
  });
});