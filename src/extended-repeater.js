const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    const main = str;
    const repeatTimes = options.repeatTimes;
    const separator = options.separator;
    const addition = options.addition;
    const additionRepeatTimes = options.additionRepeatTimes;
    const additionSeparator = options.additionSeparator;

    let result = '';

    function create(main, separator = '+', repeatTimes = 1) {
        for (let i = 0; i < repeatTimes; i++) {
            if (i !== repeatTimes - 1) {
                result += main;
                add(addition, additionRepeatTimes, additionSeparator);
                result += separator;
            } else {
                result += main;
                add(addition, additionRepeatTimes, additionSeparator);
            }
        }

        return result;
    }

    function add(
        addition = '',
        additionRepeatTimes = 1,
        additionSeparator = '|'
    ) {
        for (let i = 0; i < additionRepeatTimes; i++) {
            if (i !== additionRepeatTimes - 1) {
                result += addition;
                result += additionSeparator;
            } else {
                result += addition;
            }
        }
        return result;
    }

    create(main, separator, repeatTimes);
    return result;
}

module.exports = {
    repeater,
};
