import { expect } from 'chai';
import { removeDuplicates } from '../arrays/removeDuplicatesInPlaceII.js';

describe('Test Suite for the removeDuplicates function', () => {
    it('Should return the length of the array after removing the duplicates', (done)=> {
        const input = [1,1,1,2,2,3];
        const expectedOutput = 5;
        const result = removeDuplicates(input);
        expect(result).to.be.equal(expectedOutput);
        done();
    });
});