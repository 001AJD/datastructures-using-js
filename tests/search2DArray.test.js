import { expect } from 'chai';
import { search2DArray } from '../linearSearch/search2DArray.js';

describe('Test suite for 2D array search', ()=>{
  it('Should return index of an target item if found in array',(done)=>{
    const arr = [
      [1,2,3],
      [12,24,36],
      [13,65,99],
      [10,5,66]
    ];
    const target = 99;
    const result =  search2DArray(arr,target);
    const expectedResult = [2,2];
    expect(expectedResult[0]).to.be.equal(result[0]);
    expect(expectedResult[1]).to.be.equal(result[1]);
    expect
    done();
  });
  it('Should return not an array',(done)=>{
    const input = 'MyString';
    const target = 23;
    const expectedResult = 'Not an array'
    const actualResult = search2DArray(input,target);
    expect(expectedResult).to.be.equal(actualResult);
    done();
  });
});