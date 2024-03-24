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
const pangramsList = document.getElementById('pangrams-list');

function clearSolutions() {
    while (fourLetterList.firstChild) {
        fourLetterList.removeChild(fourLetterList.firstChild);
    }
    
    while (fiveLetterList.firstChild) {
        fiveLetterList.removeChild(fiveLetterList.firstChild);
    }

    while (fourLetterList.firstChild) {
        sixLetterList.removeChild(sixLetterList.firstChild);
    }

    while(pangramsList.firstChild) {
        pangramsList.removeChild(pangramsList.firstChild);
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
pangramsList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});
