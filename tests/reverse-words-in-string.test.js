import { expect } from 'chai';
import { reverseWords } from '../strings/reverse-words-in-string.js';

describe('Test Suite for reverseWords function', ()=>{
	it('Should return the string with reversed words', (done)=>{
		const input = 'This is an apple string'
		const expectedOutput = 'sihT si na elppa gnirts'
		const result = reverseWords(input);
		expect(result).to.be.equal(expectedOutput);
		done();
	})
});