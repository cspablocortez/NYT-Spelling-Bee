document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('bee');

    setInterval(() => {
        image.classList.remove('wiggle');

        // Force reflow/repaint
        void image.offsetWidth;

        image.classList.add('wiggle');
    }, 3000); // 10000 milliseconds = 10 seconds
});

const solutionBtn = document.getElementById('solve-btn');

solutionBtn.addEventListener('click', () => {
    solvePuzzle();
});

function collectLetters() {
    const centerLetter = document.getElementById('center-letter').textContent;
    let allLetters = [];
    let outerLetters = [];
    let letterElements = document.getElementsByClassName('letter');

    for (const el of letterElements) {
        allLetters.push(el.textContent);
    }
    
    outerLetters = allLetters.slice(1);
    return {allLetters, centerLetter, outerLetters}
}

async function collectDictionary() {
    try {
        // url = 'https://raw.githubusercontent.com/melurke/Spelling-Bee/main/word_list.txt' 
        // url = 'https://raw.githubusercontent.com/ebosspc/NYT-Spelling-Bee-Solver/main/Words_English.txt'
        // url = 'https://raw.githubusercontent.com/en-wl/wordlist/master/alt12dicts/2of4brif.txt'
        url = 'https://raw.githubusercontent.com/ddexter/NYT-Spelling-Bee/main/dictionary.txt'
        // url = 'https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt'
        // localUrl = '../data/words_alpha.txt';
        const response = await fetch(url);
        const text = await response.text();
        return text.split('\n');   
    } catch (error) {
        console.error('Error fetching dictionary: ', error);
    }
}

function solvePuzzle() {
    const gameData = collectLetters();
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const unacceptableLetters = alphabet.filter(letter => !gameData.allLetters.includes(letter));

    collectDictionary().then(wordList => {
        let acceptableWords = [];

        wordList.forEach(word => {
            word = word.toUpperCase();
            if (word.includes(gameData.centerLetter) && word.length > 3) {
                const containsUnacceptableLetter = word.split('').some(letter => unacceptableLetters.includes(letter));
                if (!containsUnacceptableLetter) {
                    acceptableWords.push(word.trim());
                }
            }
        });

        populateSolutionsSheet(acceptableWords);
    });
}

function populateSolutionsSheet(acceptableWords) {
    let solutionData = {
        fourLetterWords: [],
        fiveLetterWords: [],
        sixLetterWords: [],
        pangrams: []
    } 

    acceptableWords.forEach(word => {
        if (word.length == 4) {
            solutionData.fourLetterWords.push(word);
        }
        if (word.length == 5) {
            solutionData.fiveLetterWords.push(word);
        }
        if (word.length == 6) {
            solutionData.sixLetterWords.push(word);
        }
        if (word.length == 7) {
            solutionData.pangrams.push(word);
        }
    });

    console.log('Populating solutions sheet...');
    console.log(solutionData);
    const hits = document.getElementById('hits');
    const pangramsList = document.getElementById('pangrams-list');
    const sixLetterList = document.getElementById('six-letter-list');
    const fiveLetterList = document.getElementById('five-letter-list');
    const fourLetterList = document.getElementById('four-letter-list');

    hits.innerText = `Possible solutions found: (${acceptableWords.length})`

    solutionData.pangrams.forEach(word => {
        const listItem = document.createElement('li');
        listItem.textContent = word;
        pangramsList.appendChild(listItem);
    });
    solutionData.sixLetterWords.forEach(word => {
        const listItem = document.createElement('li');
        listItem.textContent = word;
        sixLetterList.appendChild(listItem);
    });
    solutionData.fiveLetterWords.forEach(word => {
        const listItem = document.createElement('li');
        listItem.textContent = word;
        fiveLetterList.appendChild(listItem);
    });
    solutionData.fourLetterWords.forEach(word => {
        const listItem = document.createElement('li');
        listItem.textContent = word;
        fourLetterList.appendChild(listItem);
    });
}