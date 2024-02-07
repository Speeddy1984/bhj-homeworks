const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
    const rotatorCases = rotator.querySelectorAll('.rotator__case');
    let i = 0;

    function showNextCase() {
        rotatorCases.forEach(rotatorCase => rotatorCase.classList.remove('rotator__case_active'));
        rotatorCases[i].classList.add('rotator__case_active');
        i = (i + 1) % rotatorCases.length;
    }

    setInterval(showNextCase, 1000);
});