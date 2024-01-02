const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(reverse = true) {
        this.reverse = reverse;
    }

    encrypt(text, secret) {
        if (
            text === undefined ||
            text === null ||
            text === '' ||
            secret === undefined ||
            secret === null ||
            secret === ''
        ) {
            throw new Error('Incorrect arguments!');
        }

        const ALPHABET = Array.from({ length: 26 }, (_, index) =>
            String.fromCharCode(65 + index)
        );

        function createAlphabet(letter) {
            const alpha = Array.from({ length: 26 }, (_, index) => {
                const startAlphabet = ALPHABET.indexOf(letter);
                return ALPHABET[(index + startAlphabet) % ALPHABET.length];
            });
            return alpha;
        }

        const words = text
            .replace(/[^a-zA-Z]/g, '')
            .toUpperCase()
            .split('');

        const arrSecretWord = secret.toUpperCase().split('');
        const makeArraySecretWord = Array.from(
            { length: words.length },
            (_, index) => arrSecretWord[index % arrSecretWord.length]
        );
        const secretWord = makeArraySecretWord.join('');

        const result = [];

        let count = 0;
        const arrText = text.toUpperCase().split('');

        for (let i = 0; i < arrText.length; i += 1) {
            const char = arrText[i].toUpperCase();
            const code = char.charCodeAt(0);
            if (code >= 65 && code <= 90) {
                const alpha = createAlphabet(secretWord[count]);
                count += 1;
                result.push(alpha[ALPHABET.indexOf(arrText[i])]); // encrypt
            } else {
                result.push(arrText[i]);
            }
        }

        if (!this.reverse) {
            return result.reverse().join('');
        }
        return result.join('');
    }

    decrypt(text, secret) {
        if (
            text === undefined ||
            text === null ||
            text === '' ||
            secret === undefined ||
            secret === null ||
            secret === ''
        ) {
            throw new Error('Incorrect arguments!');
        }

        const ALPHABET = Array.from({ length: 26 }, (_, index) =>
            String.fromCharCode(65 + index)
        );

        function createAlphabet(letter) {
            const alpha = Array.from({ length: 26 }, (_, index) => {
                const startAlphabet = ALPHABET.indexOf(letter);
                return ALPHABET[(index + startAlphabet) % ALPHABET.length];
            });
            return alpha;
        }

        const words = text
            .replace(/[^a-zA-Z]/g, '')
            .toUpperCase()
            .split('');

        const arrSecretWord = secret.toUpperCase().split('');
        const makeArraySecretWord = Array.from(
            { length: words.length },
            (_, index) => arrSecretWord[index % arrSecretWord.length]
        );
        const secretWord = makeArraySecretWord.join('');

        const result = [];

        let count = 0;
        const arrText = text.toUpperCase().split('');

        for (let i = 0; i < arrText.length; i += 1) {
            const char = arrText[i].toUpperCase();
            const code = char.charCodeAt(0);
            if (code >= 65 && code <= 90) {
                const alpha = createAlphabet(secretWord[count]);
                count += 1;
                result.push(ALPHABET[alpha.indexOf(arrText[i])]); // decrypt
            } else {
                result.push(arrText[i]);
            }
        }

        if (!this.reverse) {
            return result.reverse().join('');
        }
        return result.join('');
    }
}

module.exports = {
    VigenereCipheringMachine,
};
