/*
Approach
- check if the string lengths are equal
- Map str1 char to str2 char
- check if the str2 char is already mapped to any char in str1

Time Complexity - O(n);
*/

const isIsomorphicString = (str1, str2) => {
   let mapper = new Map();
   let values = new Set();
   if(str1.length !== str2.length)
   {
      return false;
   }
   for(let i = 0; i < str1.length; i++)
   {
      if(!mapper.has(str1.charAt(i)))
      {
         if(values.has(str2.charAt(i)))
         {
            return false;
         }
         else
         {
            mapper.set(str1.charAt(i), str2.charAt(i));
            values.add(str2.charAt(i));
         }
      }
      if(mapper.has(str1.charAt(i)))
      {
         if(mapper.get(str1.charAt(i)) !== str2.charAt(i))
         {
            return false;
         }
      }
   }
   return true;
};

export { isIsomorphicString }