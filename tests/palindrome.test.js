import { expect } from 'chai';
import { isPalindrome } from '../strings/palindrome.js';

describe('Test Suite for isPlaindrome function', ()=>{
  it('isPalindrome should return true : input ABA', (done)=>{
    const input = 'ABA';
    const expectedOutput = true;
    const result = isPalindrome(input);
    expect(result).to.be.equals(expectedOutput);
    done();
  });

  it('isPalindrome should return false : input ABC', (done)=>{
    const input = 'ABC';
    const expectedOutput = false;
    const result = isPalindrome(input);
    expect(result).to.be.equals(expectedOutput);
    done();
  });

  it('isPalindrome should work with number as well : input 121', (done)=>{
    const input = 121;
    const expectedOutput = true;
    const result = isPalindrome(input);
    expect(result).to.be.equals(expectedOutput);
    done();
  });

  it('isPalindrome should work with number as well and return false : input 120', (done)=>{
    const input = 120;
    const expectedOutput = false;
    const result = isPalindrome(input);
    expect(result).to.be.equals(expectedOutput);
    done();
  });

  it('isPalindrome should work with number as well and return false : input 14441', (done)=>{
    const input = 14441;
    const expectedOutput = true;
    const result = isPalindrome(input);
    expect(result).to.be.equals(expectedOutput);
    done();
  });
});