const btnStart = document.getElementById('start-animation');
const circle = document.getElementById('circle');
btnStart.addEventListener('click', function() {
    circle.classList.toggle('animate');
    
    if (circle.classList.contains('animate')) {
        btnStart.textContent = "Зупинити рух кола";
    } else {
        btnStart.textContent = "Запустити рух кола";
    }
});

setInterval(function() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    circle.style.backgroundColor = randomColor;
}, 21000);