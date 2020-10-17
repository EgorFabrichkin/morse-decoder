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
    let arrElem = [], arrWord = [];

    for (let i = 0; i < expr.length; i+=10) {
        arrElem.push(expr.slice(i, i + 10));
    }
    
    for (let i = 0; i < arrElem.length; i++) {
        if (arrElem[i] === '**********') {
            arrWord.push(' ');
        } else {
            arrWord.push(decodeElement(arrElem[i]));
        }
    }
    return arrWord.join('');
}

function decodeElement(arr) {
    let wordCode = arr.substring(arr.indexOf('1'));
    let wordMorze = [];
    for (let i = 0; i < wordCode.length; i+=2) {
        if (wordCode.substring(i, i + 2) === '10') {
            wordMorze.push('.');
        } else { 
            wordMorze.push('-');
        }
    }
    return MORSE_TABLE[wordMorze.join('')]
}

module.exports = {
   decode
}