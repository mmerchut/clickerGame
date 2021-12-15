const btnAdd = document.querySelector('.add');
const result = document.querySelector('.result');
const btnMultiply = document.querySelector('.multiply');
const btnClean = document.querySelector('.delete');

let pocket = 0;
let multiplyChange = false;


let addCoin = function() {
    if (!multiplyChange) {
        pocket++;
        console.log(pocket);
        result.innerHTML = pocket;
    }
    else if (multiplyChange) {
        pocket += 5
        console.log(pocket)
        result.innerHTML = pocket
    }
    
}

let buyMultiply = function() {
    if(pocket >= 30) {
        multiplyChange = true;
        result.innerHTML = "Multiply Buyed"
    }
    else if (pocket < 30) {
        result.innerHTML = 'You need 30 coins';
    }
    
}

let clean = function() {
    pocket = 0;
    multiplyChange = false;
    console.log('cleaned')
    result.innerHTML = pocket
}

btnAdd.addEventListener('click', addCoin);
btnMultiply.addEventListener('click', buyMultiply)
btnClean.addEventListener('click', clean)