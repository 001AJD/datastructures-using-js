import { expect } from 'chai';
import { isIsomorphicString } from '../strings/isomorphic.js';

describe('Test suite for isIsomorphicString function', ()=>{
    it('isIsomorphic should return true', (done)=> {
        const str1 = 'ACAB';
        const str2 = 'XCXY';
        const result = isIsomorphicString(str1, str2);
        const expectedOutput = true;
        expect(result).to.equal(expectedOutput);
        done();
    });

    it('isIsomorphic should return true', (done)=> {
        const str1 = 'bbbaaaba';
        const str2 = 'aaabbbba';
        const result = isIsomorphicString(str1, str2);
        const expectedOutput = false;
        expect(result).to.equal(expectedOutput);
        done();
    });

    it('isIsomorphic should return true', (done)=> {
        const str1 = 'badc';
        const str2 = 'baba';
        const result = isIsomorphicString(str1, str2);
        const expectedOutput = false;
        expect(result).to.equal(expectedOutput);
        done();
    });

});