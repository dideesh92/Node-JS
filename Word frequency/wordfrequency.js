const readline = require('readline');

function getWords(text) {
    
    const cleanedText = text.replace(/[^\w\s]/gi, '').toLowerCase();
    return cleanedText.split(/\s+/);
}

function countWordFrequency(words) {
    const wordMap = new Map();
    
    words.forEach(word => {
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word) + 1);
        } else {
            wordMap.set(word, 1);
        }
    });

    return wordMap;
}

function sortWordMap(wordMap) {
    return new Map([...wordMap.entries()].sort((a, b) => b[1] - a[1]));
}

function printWordFrequencies(sortedWordMap) {
    sortedWordMap.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a text string: ', (inputText) => {
    const words = getWords(inputText);
    const wordMap = countWordFrequency(words);
    const sortedWordMap = sortWordMap(wordMap);
    printWordFrequencies(sortedWordMap);
    rl.close();
});
