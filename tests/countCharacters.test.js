import { expect } from 'chai';
import { countCharacters } from '../strings/countCharacters.js';

describe('Test Suite for countCharacters function', ()=>{
  it('Should return the count of characters from the input string : \'AABBCCDDDDD\'', (done)=>{
    const input = 'AABBCCCCDDDDD';
    const expectedOutput = new Map();
    expectedOutput.set('A',2);
    expectedOutput.set('B',2);
    expectedOutput.set('C',4);
    expectedOutput.set('D',5);
    const result = countCharacters(input);
    expect(result.get('A')).to.equal(expectedOutput.get('A'));
    expect(result.get('B')).to.equal(expectedOutput.get('B'));
    expect(result.get('C')).to.equal(expectedOutput.get('C'));
    expect(result.get('D')).to.equal(expectedOutput.get('D'));
    done();
  });

  it('Should return the count of characters from the input string : \'112233333333333\'', (done)=>{
    const input = '112233333333333';
    const expectedOutput = new Map();
    expectedOutput.set('1',2);
    expectedOutput.set('2',2);
    expectedOutput.set('3',11);
    const result = countCharacters(input);
    expect(result.get('1')).to.equal(expectedOutput.get('1'));
    expect(result.get('2')).to.equal(expectedOutput.get('2'));
    expect(result.get('3')).to.equal(expectedOutput.get('3'));
    done();
  });
});