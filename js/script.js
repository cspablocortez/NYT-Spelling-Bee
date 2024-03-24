const solutionBtn = document.getElementById('solve-btn');

solutionBtn.addEventListener('click', () => {
    console.log('Btn clicked');
    // Hide Img and Button
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
        const response = await fetch('../data/words_alpha.txt');
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
        let threeLetterWords = [];
        let fourLetterWords = [];
        let fiveLetterWords = [];
        let sixLetterWords = [];
        let pangrams = [];

        wordList.forEach(word => {
            word = word.toUpperCase();
            if (word.includes(gameData.centerLetter) && word.length > 3) {
                const containsUnacceptableLetter = word.split('').some(letter => unacceptableLetters.includes(letter));
                if (!containsUnacceptableLetter) {
                    acceptableWords.push(word.trim());
                }
            }
        });

        acceptableWords.forEach(word => {
            if (word.length == 4) {
                fourLetterWords.push(word);
            }
            if (word.length == 5) {
                fiveLetterWords.push(word);
            }
            if (word.length == 6) {
                sixLetterWords.push(word);
            }
            if (word.length == 7) {
                pangrams.push(word);
            }
        });

        console.log(pangrams);

    });

    
}