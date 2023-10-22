import { expect } from 'chai';
import { replaceChar } from '../strings/replaceChar.js';

describe('Test Suite for replaceChar function', ()=>{
  it('Should return a string with replaces characters with input words', (done)=>{
    const inputString = 'ABBC'
    const replacement = {
      'A' : 'My',
      'B' : 'Name',
      'C' : 'Ajinkya'
    };
    const result = replaceChar(inputString, replacement);
    const expectedOutput = 'MyNameNameAjinkya';
    expect(result).to.equal(expectedOutput);
    done();
  })
});