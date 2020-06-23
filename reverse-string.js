//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (str) => {
  const splitLetters = str.split('');
  const reversedArray = splitLetters.reverse();
  const reversedString = reversedArray.join('');
  
  return reversedString;
};
