const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    function toMorse(letter) {
        let result;
        if (letter === '.-') {
            result = 'a';
        } else if (letter === '-...') {
            result = 'b';
        } else if (letter === '-.-.') {
            result = 'c';
        } else if (letter === '-..') {
            result = 'd';
        } else if (letter === '.') {
            result = 'e';
        } else if (letter === '..-.') {
            result = 'f';
        } else if (letter === '--.') {
            result = 'g';
        } else if (letter === '....') {
            result = 'h';
        } else if (letter === '..') {
            result = 'i';
        } else if (letter === '.---') {
            result = 'j';
        } else if (letter === '-.-') {
            result = 'k';
        } else if (letter === '.-..') {
            result = 'l';
        } else if (letter === '--') {
            result = 'm';
        } else if (letter === '-.') {
            result = 'n';
        } else if (letter === '---') {
            result = 'o';
        } else if (letter === '.--.') {
            result = 'p';
        } else if (letter === '--.-') {
            result = 'q';
        } else if (letter === '.-.') {
            result = 'r';
        } else if (letter === '...') {
            result = 's';
        } else if (letter === '-') {
            result = 't';
        } else if (letter === '..-') {
            result = 'u';
        } else if (letter === '...-') {
            result = 'v';
        } else if (letter === '.--') {
            result = 'w';
        } else if (letter === '-..-') {
            result = 'x';
        } else if (letter === '-.--') {
            result = 'y';
        } else if (letter === '--..') {
            result = 'z';
        } else if (letter === '.----') {
            result = '1';
        } else if (letter === '..---') {
            result = '2';
        } else if (letter === '...--') {
            result = '3';
        } else if (letter === '....-') {
            result = '4';
        } else if (letter === '.....') {
            result = '5';
        } else if (letter === '-....') {
            result = '6';
        } else if (letter === '--...') {
            result = '7';
        } else if (letter === '---..') {
            result = '8';
        } else if (letter === '----.') {
            result = '9';
        } else if (letter === '-----') {
            result = '0';
        } else if (letter === ' ') {
            result = ' ';
        }

        return result;
    }

    let arr = [];
    let result = '';

    for (let i = 0; i < expr.length / 10; i++) {
        arr.push(expr.slice(i * 10, i * 10 + 10));
    }

    function toMorseOne(elem) {
        let morse = '';

        if (elem === '**********') {
            morse = ' ';
        } else {

            for (let i = 0; i < elem.length / 2; i++) {
                if (elem.slice(i * 2, i * 2 + 2) === '10') {
                    morse += '.';
                } else if (elem.slice(i * 2, i * 2 + 2) === '11') {
                    morse += '-';
                }
            }
        }

        return toMorse(morse);
    }

    for (let j = 0; j < arr.length; j++) {
        result += toMorseOne(arr[j]);
    }

    return result;
}

module.exports = {
    decode
}