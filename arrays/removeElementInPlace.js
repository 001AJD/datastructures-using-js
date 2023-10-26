const removeElementInPlace = (nums, val) => {
  let arr = nums.filter((item) => item !== val);
  nums.splice(0,nums.length);
  nums.push(...arr);
  return nums.length;
};
export { removeElementInPlace }