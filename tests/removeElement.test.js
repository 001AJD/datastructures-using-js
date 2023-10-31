import { expect } from 'chai';
import { removeElementInPlace } from '../arrays/removeElementInPlace.js';

describe('Test Suite for the removeElements function', ()=>{
  it('Should return a array after removing a specified value', (done)=>{
    const input = [3,2,2,3];
    const value = 3;
    const expectedOutput = 2;
    const result = removeElementInPlace(input, value);
    expect(result).to.equals(expectedOutput);
    done();
  });
});