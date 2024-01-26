'use strict'

const counter = function() {
    const timer = document.getElementById('timer');
    if (timer.textContent > 0) {
        timer.textContent -=1;
        setTimeout(counter, 1000);
    } else {
        alert('Вы победили в конкурсе!');
    }
}

counter();