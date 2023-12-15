const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      let num = count === 1 ? '' : count;
      newStr = newStr + num + str[i];
      count = 1;
    } else count++;
  }

  return newStr;
}

module.exports = {
  encodeLine
};