const solutionBtn = document.getElementById('solution-btn');



solutionBtn.addEventListener('click', () => {
    console.log('Btn clicked');
    // Hide Img and Button
    solvePuzzle();
});

function solvePuzzle() {
    const centerLetter = document.getElementById('center-letter').textContent;
    let outerLetters = [];
    const allLetters = document.getElementsByClassName('letter');
    for (const el of allLetters) {
        outerLetters.push(el.textContent);
    }
    outerLetters.shift();
    console.log(outerLetters);
}