const reveal = document.querySelectorAll('.reveal');

function isVisible() {
    reveal.forEach((element) => {
        const windowHeight = window.innerHeight;
        const { top, bottom } = element.getBoundingClientRect();

        if (top < windowHeight && bottom > 0) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        }
    });
}

document.addEventListener('scroll', isVisible);
