import { expect } from 'chai';
import { isAnagram } from '../strings/anagram.js';

describe('Test Suite for the Anagram function', ()=>{
  it('isAnagram function should return true : input => listen, silent',(done)=>{
    const str1 = 'listen';
    const str2 = 'silent';
    const result = isAnagram(str1, str2);
    const expectedOutput = true;
    expect(result).to.be.equal(expectedOutput);
    done();
  });

  it('isAnagram function should return true : input => Listen, Silent',(done)=>{
    const str1 = 'Listen';
    const str2 = 'Silent';
    const result = isAnagram(str1, str2);
    const expectedOutput = true;
    expect(result).to.be.equal(expectedOutput);
    done();
  });

  it('isAnagram function should return false : input => Google, Facebook',(done)=>{
    const str1 = 'Google';
    const str2 = 'Facebook';
    const result = isAnagram(str1, str2);
    const expectedOutput = false;
    expect(result).to.be.equal(expectedOutput);
    done();
  });
});