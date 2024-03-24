document.getElementById('solve-btn').addEventListener('click', () => {
    document.getElementById('solutions-sheet').classList.add('active');
    document.getElementById('close-btn').addEventListener('click', function() {
        document.getElementById('solutions-sheet').classList.remove('active');
        clearSolutions();
    });
});

const fourLetterList = document.getElementById('four-letter-list');
const fiveLetterList = document.getElementById('five-letter-list');
const sixLetterList = document.getElementById('six-letter-list');
const sevenLetterList = document.getElementById('seven-letter-list');
const eightLetterList = document.getElementById('eight-letter-list');
const nineLetterList = document.getElementById('nine-letter-list');

function clearSolutions() {
    while (fourLetterList.firstChild) {
        fourLetterList.removeChild(fourLetterList.firstChild);
    }
    
    while (fiveLetterList.firstChild) {
        fiveLetterList.removeChild(fiveLetterList.firstChild);
    }

    while (sixLetterList.firstChild) {
        sixLetterList.removeChild(sixLetterList.firstChild);
    }

    while(sevenLetterList.firstChild) {
        sevenLetterList.removeChild(sevenLetterList.firstChild);
    }

    while(eightLetterList.firstChild) {
        eightLetterList.removeChild(eightLetterList.firstChild);
    }

    while(nineLetterList.firstChild) {
        nineLetterList.removeChild(nineLetterList.firstChild);
    }
}

fourLetterList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});
fiveLetterList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});
sixLetterList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});
sevenLetterList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});
eightLetterList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});
nineLetterList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});