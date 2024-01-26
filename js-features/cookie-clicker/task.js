'use strict'

const image = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
image.onclick = function() {
    clickerCounter.textContent++;
    if (image.width === 200) {
        image.width = 150;
    } else {
        image.width = 200;
    }
}


 