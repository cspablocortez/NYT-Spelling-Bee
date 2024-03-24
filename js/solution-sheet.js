document.getElementById('solve-btn').addEventListener('click', () => {
    document.getElementById('solutions-sheet').classList.add('active');

    document.getElementById('close-btn').addEventListener('click', function() {
        document.getElementById('solutions-sheet').classList.remove('active');
        // Optionally, move it back off-screen immediately
        // This can be removed if you prefer to keep the transition
        // setTimeout(() => document.getElementById('solutions-sheet').style.bottom = '-100%', 300);
    });
});
