let count = 0;

const btnDecrease = document.getElementById('btnDecrease');
const btnReset = document.getElementById('btnReset');
const btnIncrease = document.getElementById('btnIncrease');

const result = document.querySelector('.result');

btnDecrease.addEventListener('click', function () {
    count--;
    result.textContent = count;
});

btnIncrease.addEventListener('click', function () {
    count++;
    result.textContent = count;
});

btnReset.addEventListener('click', function () {
    count = 0;
    result.textContent = count;
});
