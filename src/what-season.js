const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
    if (typeof date === 'undefined') {
        return 'Unable to determine the time of year!';
    }

    try {
        date.getTime();
    } catch (error) {
        throw new Error('Invalid date!');
    }

    let month = date.getUTCMonth();

    switch (month) {
        case 2:
        case 3:
        case 4:
            message = 'spring';
            break;
        case 5:
        case 6:
        case 7:
            message = 'summer';
            break;
        case 8:
        case 9:
        case 10:
            message = 'autumn';
            break;
        default:
            message = 'winter';
    }

    return message;
}

module.exports = {
    getSeason,
};
