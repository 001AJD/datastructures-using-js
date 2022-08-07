import { expect } from 'chai';
import { binarySearch } from './binarySearch.js';

describe('Test Suite for Binary Search function', ()=>{
  
  it('Should return index of target element', (done)=>{
    const input = [10,23,44,299,300,500,987];
    const target = 300;
    const expectedResult = 4;
    const actualResult = binarySearch(input,target);
    expect(actualResult).to.be.equal(expectedResult);
    done();
  });

  it('Should return -1 if target element not found in the aray', (done)=>{
    const input = [10,23,44,299,300,500,987];
    const target = 3000;
    const expectedResult = -1;
    const actualResult = binarySearch(input,target);
    expect(actualResult).to.be.equal(expectedResult);
    done();
  });

  it('Should handle negative numbers in array', (done)=>{
    const input = [-10,-23,-44,299,300,500,987];
    const target = -23;
    const expectedResult = 1;
    const actualResult = binarySearch(input,target);
    expect(actualResult).to.be.equal(expectedResult);
    done();
  });

  it('Should return not an array', (done) => {
    const input = 10;
    const target = 300;
    const expectedResult = 'Not an array';
    const actualResult = binarySearch(input,target);
    expect(actualResult).to.be.equal(expectedResult);
    done();
  });

  it('Should handle descending ordered array', (done)=>{
    const input = [100,98,56,47,45,33,20,10];
    const target = 33;
    const expectedResult = 5;
    const actualResult = binarySearch(input,target);
    expect(actualResult).to.be.equal(expectedResult);
    done();
  });
});