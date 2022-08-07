import { expect } from 'chai';
import { linearSearch } from './linearSearch.js';

describe('Test Suite for Linear Search', ()=>{
  it('Should return index of an target element to be searched', (done)=>{
    const array = [10,15,20,5,2,99];
    const item = 5;
    const expected = 3;
    const result = linearSearch(array,item);
    expect(result).to.be.equal(expected);
    done();
  });

  it('Should return index of an target character to be searched', (done)=>{
    const array = 'Ajinkya';
    const item = 'A';
    const expected = 0;
    const result = linearSearch(array,item);
    expect(result).to.be.equal(expected);
    done();
  });

  it('Should return -1 if the target character does not exists', (done)=>{
    const array = 'Ajinkya';
    const item = 'z';
    const expected = -1;
    const result = linearSearch(array,item);
    expect(result).to.be.equal(expected);
    done();
  });

  it('Should return -1 if the target number does not exists', (done)=>{
    const array = [10,20,40,50,2,92];
    const item = 999;
    const expected = -1;
    const result = linearSearch(array,item);
    expect(result).to.be.equal(expected);
    done();
  });

  it('Should return index of an target character to be searched in range', (done)=>{
    const array = 'Ajinkya';
    const item = 'A';
    const expected = -1;
    const start = 1;
    const end = 5;
    const result = linearSearch(array,item, start, end);
    expect(result).to.be.equal(expected);
    done();
  });

  it('Should return -1 if target element not found in range', (done)=>{
    const array = 'Ajinkya';
    const item = 'A';
    const expected = -1;
    const start = 1;
    const end = 5;
    const result = linearSearch(array,item, start, end);
    expect(result).to.be.equal(expected);
    done();
  });
});