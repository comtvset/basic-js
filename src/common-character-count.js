const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let a = s1.split('');
  let b = s2.split('');

    a.forEach(e => {
        if (b.includes(e)) {
        count++;
        b.splice(b.indexOf(e), 1);
        }
    });

console.log(count);
return count;
}

module.exports = {
  getCommonCharacterCount
};
