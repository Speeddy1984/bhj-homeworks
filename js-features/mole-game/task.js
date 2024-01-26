'use strict'

const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let counterHoleHasMole = 0;
let counterWrongHole = 0;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
    
    getHole(i).onclick = function() {
        if (this.classList.contains( 'hole_has-mole' )) {
            counterHoleHasMole++;
            dead.textContent = counterHoleHasMole;
        } else {
            counterWrongHole++;
            lost.textContent = counterWrongHole;
        }

        if (counterHoleHasMole === 10) {
            alert('Победа!');
            counterHoleHasMole = 0;
            counterWrongHole = 0;
            dead.textContent = counterHoleHasMole;
            lost.textContent = counterWrongHole;
        }

        if (counterWrongHole === 5) {
            alert('Вы проиграли');
            counterHoleHasMole = 0;
            counterWrongHole = 0;
            dead.textContent = counterHoleHasMole;
            lost.textContent = counterWrongHole;
        }
    };
}


