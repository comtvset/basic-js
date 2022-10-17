const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let count = [];

  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
        if(typeof members[i] === 'string') {
        count.push(members[i].trim().toUpperCase().slice('').substring(0, 1));
      }
    }
    return count.sort().join('');
  } else return false;
}

module.exports = {
  createDreamTeam
};

createDreamTeam(['Peter', 'Adam', 'Gary', 'Bobby', 'Philip', 'Andrea', 'Evelyn', 'Evelyn', 'Kimberly', 'Denise']) //'AABDEEGKPP'
