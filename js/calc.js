'use strict';

function calc() {

    const buttonValue = this.innerText;
    const resPlace = document.querySelector('#res');

    if(buttonValue === 'C') {
        resPlace.value = '';
    }else if(buttonValue === '=') {
        resPlace.value = eval(resPlace.value); 
        // eval oblicza działania wpisane w inputa (np '2+2')
    }else {
        resPlace.value += buttonValue;
        // += dokleja tekst do istniejącego juz tekstu
    }

}

const buttons = document.querySelectorAll('button');

buttons.forEach(element => {

    element.addEventListener('click', calc);

});
// kalkulator