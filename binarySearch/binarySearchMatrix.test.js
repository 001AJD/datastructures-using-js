// import { expect } from 'chai';
// import { binarySearchMatrix } from './binarySearchMatrix.js';

// describe('Test Suite for sorted matrix search', ()=>{
//   it('Should return position of the target element from the matrices',(done)=>{
//     const input = [
//       [1,3,5,7],
//       [10,11,16,20],
//       [23,30,34,60]
//     ];
//     const target = 16;
//     const expectedResult = [1,2];
//     const actualResult = binarySearchMatrix(input, target);
//     expect(actualResult).to.eql(expectedResult);
//     done();
//   });

//   it('Should return false if target element does not exist in matrices',(done)=>{
//     const input = [
//       [1,3,5,7],
//       [10,11,16,20],
//       [23,30,34,60]
//     ];
//     const target = 1600;
//     const expectedResult = false;
//     const actualResult = binarySearchMatrix(input, target);
//     expect(actualResult).to.eql(expectedResult);
//     done();
//   });

//   it('Should return not an array',(done)=>{
//     const input = 'My string input';
//     const target = 16;
//     const expectedResult = 'Not an array';
//     const actualResult = binarySearchMatrix(input, target);
//     expect(actualResult).to.be.equal(expectedResult);
//     done();
//   });
// });